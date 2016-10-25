var express = require('express');
var router = express.Router();

var request = require('request');

/* GET home page. */
router.get('/daily', function(req, res, next) {
  var reqData = req.body;

  var reqOptions = {
      url: 'http://104.155.210.101:8081/daily',
      body: reqData,
      timeout: 120000,
      headers: {
        "Accept": "application/json",
        "Connection" : "keep-alive"
      }
  };

  request.post(reqOptions).pipe(res);

});

router.get('/timely', function(req, res, next) {
  var reqData = req.body;

  var reqOptions = {
      url: 'http://104.155.210.101:8081/timely',
      body: reqData,
      timeout: 120000,
      headers: {
        "Accept": "application/json",
        "Connection" : "keep-alive"
      }
  };

  request.post(reqOptions).pipe(res);

});

router.get('/', function(req, res, next) {
  request.post(req).pipe(res);

});


module.exports = router;
