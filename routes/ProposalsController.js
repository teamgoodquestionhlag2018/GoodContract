var proposalService = require("../services/ProposalServices");

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(proposalService.GetProposals());
});

router.post('/', function (req, res, next) {
  var proposal = req.body;
  
  proposalService.AddProposal(proposal);
  res.send(proposal);
});

router.get('/:id', function (req, res, next) {
  res.send(proposalService.GetProposalById(req.params.id));
});

router.put('/:id/sign', function (req, res, next) {
  var id = req.params.id;
  
  proposalService.SignProposal(id);
  var proposal = proposalService.GetProposalById(id);

  res.send(proposal);
});

module.exports = router;
