var express = require('express');
var router = express.Router();
var request = require('request');

/* POST update task length*/
router.post('/updateTaskLength', function(req, res) {
    let length =  req.body.length;
    let storyState = req.body.storyState;
    let url =  `http://localhost:8080/task/update?storyState=${storyState}&location=${length}&tab=${length}`;
    
    request.post(url, function (error, response, body){
      try {
        res.send(body);
      } catch (err) {
        console.log('error: ', err);
      }
    });
});




module.exports = router;
