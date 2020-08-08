import express from 'express';
import Classes from './controllers/Classes';
import Connections from './controllers/Connections';

const routes = express.Router();

routes.get('/classes', Classes.index);
routes.post('/classes', Classes.create);

routes.get('/connections', Connections.index);
routes.post('/connections', Connections.create);

export default routes;
