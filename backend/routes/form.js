'use strict'

var express = require('express')
var FormController = require('../controllers/form');
var router = express.Router();

router.post('/save',FormController.save);

module.exports=router;
