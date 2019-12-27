import API from './api';
import SessionManager from './session-manager';
import SQL from './sql';
import UserManager from './user-manager';

export default class Server {
  constructor(config) {
    this.config = config;

    const { api, sql } = config || {};

    this.api = new API(api, this);
    this.sql = new SQL(sql, this);

    this.sessions = new SessionManager();
    this.users = new UserManager(this.sql);

    this.api.start();
  }

  handleEvent(payload) {
    switch (payload.resource) {
      case 'login':
        this.users.validate(payload.auth)
          .then(() => {
            payload.respond({ token: this.sessions.create(payload.auth) });
          })
          .catch(() => {
            payload.respond(null, 'unauthorized');
          });

        break;

      case 'blogs':
        this.sql.get('blogs')
          .then((blogs) => payload.respond(blogs));
        break;

      case 'projects':
        this.sql.get('projects')
          .then((projects) => payload.respond(projects));

        break;

      default: payload.respond(null, 'not found');
    }
  }
}
