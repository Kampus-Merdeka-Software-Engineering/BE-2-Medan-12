import express from 'express';
import { create, findAll } from '../controllers/reserve.controller.js';
const rsvRouter = express.Router();

// RESERVE
rsvRouter.post('/reserve-post', create);
rsvRouter.get('/reserve-get', findAll);

export default rsvRouter;