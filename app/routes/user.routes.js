import express from 'express';
import { create, createL, findAll, update, _delete, findOne, login } from '../controllers/user.controller.js';
const uRouter = express.Router();

uRouter.post('/user-register', create);
uRouter.post('/users', createL);
uRouter.post('/login', login);
uRouter.get('/users', findAll);
uRouter.put('/:id-user', update);
uRouter.delete('/:id-user', _delete);
uRouter.get('/:id', findOne);

export default uRouter;
