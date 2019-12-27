import { uuid } from '../utils/index';

export default class Payload {
  constructor(response) {
    this.response = response;

    this.uuid = uuid();
    this.auth = undefined;
    this.complete = false;
    this.data = undefined;
    this.method = undefined;
    this.resource = undefined;

    this.timeoutTimer = setTimeout(() => {
      this.timeout();
    }, 30000);
  }

  getCode(type) {
    switch (type) {
      case 'ok': return 200;
      case 'created': return 201;
      case 'no content': return 204;
      case 'bad request': return 400;
      case 'unauthorized': return 401;
      case 'forbidden': return 403;
      case 'not found': return 404;
      case 'method not allowed': return 405;
      case 'timeout': return 408;
      case 'conflict': return 409;
      case 'internal server error': return 500;
      default: return 500;
    }
  }

  timeout() {
    this.respond({
      message: 'request has timed out',
    }, 'timeout');
  }

  respond(data, status = 200) {
    clearTimeout(this.timeoutTimer);

    this.timeoutTimer = undefined;

    const code = (typeof status === 'number' && (status >= 200 && status < 600))
      ? status
      : this.getCode(status);

    this.response.status(code).send({
      trackingId: this.uuid,
      data: data || {},
    });

    this.complete = true;
  }
}
