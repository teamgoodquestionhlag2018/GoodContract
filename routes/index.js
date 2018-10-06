// const service = require('../service.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proposals', function (req, res, next) {
  res.send([
    {
      freelancer: '0x123',
      client: '0x456',
      milestones: [
        {
          prize: 123,
          requirements: '',
          deadline: JSON.stringify(Date.now())
        }
      ],
      creationDate: JSON.stringify(Date.now()),
      signed: false
    },
    {
      freelancer: '0x123',
      client: '0x456',
      milestones: [
        {
          prize: 123,
          requirements: '',
          deadline: JSON.stringify(Date.now())
        }
      ],
      creationDate: JSON.stringify(Date.now()),
      signed: false
    }
  ]);
});

router.post('/proposals', function (req, res, next) {
  res.send({
    freelancer: '0x123',
    client: '0x456',
    milestones: [
      {
        prize: 123,
        requirements: '',
        deadline: JSON.stringify(Date.now())
      }
    ],
    creationDate: JSON.stringify(Date.now()),
    signed: false
  });
});

router.get('/proposals/:id', function (req, res, next) {
  res.send({
    id: req.params.id,
    freelancer: '0x123',
    client: '0x456',
    milestones: [
      {
        prize: 123,
        requirements: '',
        deadline: JSON.stringify(Date.now())
      }
    ],
    creationDate: JSON.stringify(Date.now()),
    signed: false
  });
});

router.put('/proposals/:id/sign', function (req, res, next) {
  res.send({
    id: req.params.id,
    freelancer: '0x123',
    client: '0x456',
    milestones: [
      {
        prize: 123,
        requirements: '',
        deadline: JSON.stringify(Date.now())
      }
    ],
    creationDate: JSON.stringify(Date.now()),
    signed: true
  });
});

module.exports = router;
