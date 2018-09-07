var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET get all users*/
router.get('/getAllUsers', function(req, res) {
  let url = 'http://localhost:8080/user/all';
  request.get(url, function (error, response, body) {
    try {
      res.send(body);
    } catch (err) {
      console.log('error: ', err);
    }
  });
});

/* POST add a user*/
router.post('/addUser', function(req, res) {
  let param =  req.body.name;
  let location = req.body.location;
  let tab = req.body.tab;
  let url =  `http://localhost:8080/user/add?name=${param}&location=${location}&tab=${tab}`;
  
  request.post(url, function (error, response, body){
    try {
      res.send(body);
    } catch (err) {
      console.log('error: ', err);
    }
  });
});

/* POST delete a user*/
router.post('/deleteUser', function(req, res) {
  let param =  req.body.name;
  let url =  `http://localhost:8080/user/delete?name=${param}`;
  
  request.post(url, function (error, response, body){
    try {
      res.send(body);
    } catch (err) {
      console.log('error: ', err);
    }
  });
});


/* PUT update user location*/
router.put('/updateUserLocation', function(req, res) {
  let name =  req.body.name;
  let location = req.body.location;
  let id = req.body.id;
  let tab = req.body.tab

  let url =  `http://localhost:8080/user/update?name=${name}&location=${location}&id=${id}&tab=${tab}`;
  
  request.put(url, function (error, response, body){
    try {
      res.send(body);
    } catch (err) {
      console.log('error: ', err);
    }
  });
});



module.exports = router;
