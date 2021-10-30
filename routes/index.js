/*
Hengameh Khajehpour
SN# 301122261
Midterm project
Comp 229 Sec009
Fall 2021
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);
router.get('/about', controlerIndex.about);


module.exports = router;
