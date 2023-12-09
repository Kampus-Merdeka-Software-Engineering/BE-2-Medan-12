import express from 'express';
import { create, findAll, _delete } from '../controllers/reserve.controller.js';
const rsvRouter = express.Router();

rsvRouter.post('/reserve-post', create);
rsvRouter.get('/reserve-get', findAll);
rsvRouter.delete('/:id-reserve', _delete);

export default rsvRouter;