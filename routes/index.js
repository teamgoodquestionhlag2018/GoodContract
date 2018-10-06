var mockRepository = require("../data/mocks/MockProposalRepository");

var service = require('../service.js');
var express = require('express');
var router = express.Router();
var repo = new mockRepository();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proposals', function (req, res, next) {
  res.send(repo.GetProposals());
});

router.post('/proposals', function (req, res, next) {
  var proposal = req.body;

  repo.AddProposal(proposal);
  res.send(proposal);
});

router.get('/proposals/:id', function (req, res, next) {
  res.send(repo.GetProposalById(req.params.id));
});

router.put('/proposals/:id/sign', function (req, res, next) {
  var id = req.params.id;

  repo.SignProposal(id);
  var proposal = repo.GetProposalById(id);

  service(proposal, () => res.send(proposal));
});

module.exports = router;
