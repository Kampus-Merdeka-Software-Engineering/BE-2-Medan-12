const userController = require('../controllers/user.controller.js');
const uRouter = require('express').Router();


// USER
uRouter.post('/post', userController.create);
uRouter.get('/get', userController.findAll);
uRouter.put('/:id', userController.update);
uRouter.delete('/:id', userController.delete);
uRouter.get('/:id', userController.findOne);

module.exports = uRouter;
