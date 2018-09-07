var express = require('express');
var router = express.Router();
var request = require('request');

/* GET get all tasks*/
var tracker = require('pivotaltracker');
var client = new tracker.Client('602237958eb80b611e715806a3e766d7');
var headers = {
    'X-TrackerToken': '602237958eb80b611e715806a3e766d7',
    'Content-Type': 'application/json'
}

// Get my people
router.get('/people', function (req, res) {
    console.log('here');
    try {
        let url = 'https://www.pivotaltracker.com/services/v5/my/people?project_id=1900007';
        var options = {
            url: url,
            headers: headers
        }
        request.get(options, function (error, response, body) {
            res.send(body)
        })
    }
    catch (err) {
        console.log(err);
    }
})

// Get project data
router.get('/project', function (req, res) {
    
    try {
        let url = 'http://www.pivotaltracker.com/services/v5/projects/1900007'
        var options = {
            url: url,
            headers: headers
        }
        request.get(options, function (error, response, body) {
            res.send(body)
        })
        // client.project(1900007).get(function(error, project) {
        //     console.log("PROJECT: ", project);
        //     res.send(project);
        // })
    }
    catch(err) {
        console.log(err);
    }
})

// Get all stories from project by label
router.get('/project/stories/withLabelOnly', function (req, res) {
    try {
        let url = 'http://www.pivotaltracker.com/services/v5/projects/1900007/stories?with_label=' + req.query.storyLabel;
        var options = {
            url: url,
            headers: headers
        }
        request.get(options, function (error, response, body) {
            res.send(body)
        })
    }
    catch(err) {
        console.log(err);
    }
})

// Get all stories from project by state only
router.get('/project/stories/withStateOnly', function (req, res) {
    try {
        let url = 'http://www.pivotaltracker.com/services/v5/projects/1900007/stories?with_state=' + req.query.storyState;
        var options = {
            url: url,
            headers: headers
        }
        request.get(options, function (error, response, body) {
            res.send(body)
        })
    }
    catch(err) {
        console.log(err);
    }
})

// Get all stories from project by label and state
router.get('/project/stories/withLabelAndState', function (req, res) {
    try {
        let url = 'http://www.pivotaltracker.com/services/v5/projects/1900007/stories?with_label=' + req.query.storyLabel + '&with_state=' + req.query.storyState;
        var options = {
            url: url,
            headers: headers
        }
        request.get(options, function (error, response, body) {
            res.send(body)
        })
    }
    catch(err) {
        console.log(err);
    }
})


module.exports = router;