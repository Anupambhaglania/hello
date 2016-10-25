var express = require('express');
var router = express.Router();

var request = require('request');

router.post('/daily', function(req, res, next) {
  var reqData = req.body;
  console.log(reqData);
  var reqOptions = {
      url: 'http://104.155.210.101:8081/daily',
      body: reqData,
      timeout: 120000,
      json:true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Connection" : "keep-alive"
      }
  };
    try{
        request.post(reqOptions).pipe(res);
    }catch(e){
        console.log(e);
    }
  
});

router.post('/timely', function(req, res, next) {
  var reqData = req.body;
  console.log(reqData);

  var reqOptions = {
      url: 'http://104.155.210.101:8081/timely',
      body: reqData,
      timeout: 120000,
      json:true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Connection" : "keep-alive"
      }
  };

    try{
        request.post(reqOptions).pipe(res);
    }catch(e){
        console.log(e);
    }

});

router.get('/map', function(req, res, next) {
  var reqOptions = {
      url: 'http://104.155.210.101:8081/images/map.png',
  };
  request.get(reqOptions).pipe(res);
});


module.exports = router;
