import Express from 'express';

import * as endpoints from '../api/index';

export default class API {
  constructor(config, parent) {
    this.config = config;
    this.parent = parent;

    this.status = {
      active: false,
    };

    this.connections = [];

    this.initialize();
  }

  start() {
    return new Promise((resolve, reject) => {
      if (this.status.active) {
        reject(new Error('api is already active'));
      }

      try {
        this.instance = this.server.listen(this.config.port, () => {
          this.status.active = true;
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  stop() {
    return new Promise((resolve, reject) => {
      if (!this.status.active) {
        reject(new Error('api is not currently active'));
      }

      try {
        this.instance.close(() => {
          this.status.active = false;
          this.instance = undefined;
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  initialize() {
    this.server = new Express();

    Object.keys(endpoints).forEach((key) => {
      endpoints[key](
        this.server,
        this.parent.handleEvent.bind(this.parent),
        this.config.root,
      );
    });
  }
}
