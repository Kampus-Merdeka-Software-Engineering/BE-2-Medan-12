import express from 'express';
import { create, update, findAll, findOne } from '../controllers/room.controller.js';
const rmRouter = express.Router();


// USER
rmRouter.post('/room-post', create);
rmRouter.put('/:id-room', update);
rmRouter.get('/room-get', findAll);
rmRouter.get('/:id-room', findOne);

export default rmRouter;
