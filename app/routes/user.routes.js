import express from 'express';
import { create, findAll, update, _delete, findOne } from '../controllers/user.controller.js';
const uRouter = express.Router();


// USER
uRouter.post('/user-register', create);
uRouter.get('/user-get', findAll);
uRouter.put('/:id-user', update);
uRouter.delete('/:id-user', _delete);
uRouter.get('/user-login', findOne);

export default uRouter;
