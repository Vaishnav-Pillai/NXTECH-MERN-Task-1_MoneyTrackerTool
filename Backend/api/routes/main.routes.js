var express = require('express');
var router = express.Router();
const mainController = require('../controller/main.controller.js');

//HTTP Verbs : Post - Create, Get - Read, Put - Update, Delete

router.post('/expenses',mainController.create);

router.get('/expenses',mainController.readAll);

router.delete('/expenses/:id',mainController.deleteOne);

// router.get('/providers/:id',mainController.readOne);

// router.put('/providers/:id',mainController.update);

// router.delete('/providers',mainController.deleteAll);

module.exports = router;