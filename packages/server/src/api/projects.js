import Payload from '../models/payload';

export default (server, trigger = () => {}, root = '') => {
  server.all(`${root}/projects/:id?`, (request, response) => {
    const authHeader = request.header('Authorization')
      || request.header('authorization');

    const payload = new Payload(response);
    payload.auth = authHeader;
    payload.data = (request.params.id) ? { id: request.params.id } : undefined;
    payload.method = request.method;
    payload.resource = 'projects';

    trigger(payload);
  });
};
