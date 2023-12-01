const reserveController = require('../controllers/reserve.controller.js');
const rsvRouter = require('express').Router();

// RESERVE
rsvRouter.post('/post', reserveController.create);
rsvRouter.get('/get', reserveController.findAll);

module.exports = rsvRouter;