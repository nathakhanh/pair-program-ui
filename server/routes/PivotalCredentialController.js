var express = require('express');
var router = express.Router();
var request = require('request');

/* POST update pivotal credential]*/
router.post('/updatePivotalCredential', function(req, res) {
    let id =  req.body.pivotalId;
    let initial = req.body.pivotalInitials;

    let url =  `http://localhost:8080/pivotal/add?id=${id}&initial=${initial}`;
    
    request.post(url, function (error, response, body){
      try {
        res.send(body);
      } catch (err) {
        console.log('error: ', err);
      }
    });
});

/* GET get all pivotal credentials*/
router.get('/getAllPivotalCredential', function(req, res) {
    let url = 'http://localhost:8080/pivotal/all';
    request.get(url, function (error, response, body) {
      try {
        res.send(body);
      } catch (err) {
        console.log('error: ', err);
      }
    });
});



module.exports = router;