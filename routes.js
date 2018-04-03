'use strict';
var express = require('express');
var routes = express.Router();

routes.get('/', function(req, res, next) {
    // res.render('index', { title: 'Hyperledger Caliper benchmark tool' });
    res.redirect('/reports');
});

routes.get('/fabric', function(req, res, next) {
    res.render('network_fabric', { title: 'Hyperledger Caliper - Fabric benchmark' });
});

routes.get('/sawtooth', function(req, res, next) {
    res.render('network_sawtooth', { title: 'Hyperledger Caliper- Sawtooth benchmark' });
});

routes.get('/reports', function(req, res, next) {
    var listFiles = ["report20180402T072508", "report20180402T072508aaa", "report20180402T072508bbbb", "report20180402T072508cccc"];
    res.render('reports', { title: 'Benchmark reports', listReports : listFiles});
});

routes.get('/reports/:report_id', function(req, res, next) {
    if (typeof(req.params.report_id) !== 'undefined' && req.params.report_id.length > 0) {
        res.render('report_detail', { title: 'Benchmark reports' });
    } else {
        res.redirect('/reports');
    }
});






module.exports = routes;