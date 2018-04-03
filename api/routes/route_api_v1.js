'use strict';

var express = require('express');
var router = express.Router();
var ctrlBenchmark = require('../controllers/benchmark');

router.get("/results", ctrlBenchmark.getTestResultsList);



module.exports = router;