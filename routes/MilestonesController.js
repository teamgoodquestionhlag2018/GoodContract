var express = require('express');
var router = express.Router();

var milestoneService = require('../services/MilestoneServices');

router.put('/:id/sign', function (req, res, next) {
    var id = req.params.id;

    try {
        milestoneService.SignMilestone(id, req.user.id);
    }
    catch (error) {
        console.log(error);

        if (error.code == undefined) {
            res.status(500).send();
        }

        res.status(error.code).send(error);
    }

    res.send();
});

module.exports = router;
