import { uuid } from '../utils/index';

export default class Session {
  constructor(auth) {
    this.id = uuid();

    [this.user, this.pass] = Buffer.from(auth, 'base64')
      .toString()
      .split(':');

    this.timeoutTimer = setTimeout(() => {
      this.invalidate();
    }, 3600000);
  }

  get auth() {
    return Buffer.from(`${this.user}:${this.pass}`)
      .toString('base64');
  }

  get token() {
    return Buffer.from(this.id)
      .toString('base64');
  }

  invalidate() {
    clearTimeout(this.timeoutTimer);

    this.timeoutTimer = undefined;
    this.id = undefined;
    this.pass = undefined;
    this.user = undefined;
  }

  matches(auth) {
    if (auth === this.auth) {
      return true;
    }

    return false;
  }
}
