var express = require('express');
var router = express.Router();

var milestoneService = require('../services/MilestoneServices');

router.put('/:id/sign', function (req, res, next) {
    var id = req.params.id;
    
    milestoneService.SignMilestone(id, req.user.id);
    
    res.send();
});

module.exports = router;
