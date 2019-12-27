import Session from './session';

export default class SessionManager {
  constructor() {
    this.sessions = [];
  }

  clear() {
    this.remove(...this.sessions);
  }

  create(auth) {
    let session = this.sessions.find(
      (sessionObj) => sessionObj.matches(auth),
    );

    if (session) {
      this.remove(session);
    }

    session = new Session(auth);
    this.sessions.push(session);

    return session.token;
  }

  remove(...sessions) {
    sessions.forEach((session) => {
      if (!this.sessions.includes(session)) {
        session.invalidate();
        this.sessions.splice(this.sessions.indexOf(session), 1);
      }
    });

    return this;
  }

  getByToken(token) {
    return this.sessions.find((session) => session.token === token);
  }

  validate(token) {
    return !!this.getByToken(token);
  }
}
