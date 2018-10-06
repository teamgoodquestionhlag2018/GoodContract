var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/proposals', function (req, res, next) {
  res.send([
    {
      freelancer: '0x123',
      client: '0x456',
      milestones: [
        {
          prize: 123,
          requirements: '',
          dueDate: JSON.stringify(Date.now())
        }
      ]
    },
    {
      freelancer: '0x123',
      client: '0x456',
      milestones: [
        {
          prize: 123,
          requirements: '',
          dueDate: JSON.stringify(Date.now())
        }
      ]
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
        dueDate: JSON.stringify(Date.now())
      }
    ]
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
        dueDate: JSON.stringify(Date.now())
      }
    ]
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
        dueDate: JSON.stringify(Date.now())
      }
    ]
  });
});

module.exports = router;
