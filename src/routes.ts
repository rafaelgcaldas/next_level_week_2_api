import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsControllers from './controllers/ConnectionsControllers';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionControllers = new ConnectionsControllers();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionControllers.index);
routes.post('/connections', connectionControllers.create);

export default routes;