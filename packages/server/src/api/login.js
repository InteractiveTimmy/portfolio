import Payload from '../models/payload';

export default (server, trigger = () => {}, root = '') => {
  server.all(`${root}/login`, (request, response) => {
    const authHeader = request.header('Authorization')
      || request.header('authorization');

    const payload = new Payload(response);
    payload.auth = authHeader;
    payload.data = {};
    payload.method = request.method;
    payload.resource = 'login';

    trigger(payload);
  });
};
