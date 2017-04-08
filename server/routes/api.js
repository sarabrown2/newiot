var express = require('express');
var router = new express.Router();
var Device = require ("../models/deviceModel.js");

// Home page route
router.get('/', function (req, res) {
  res.send('IOT Device Profiler home page');
});

// Device routes
router.get('/device', function (req, res) {
  Device.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json(doc);
      }
    });
});

router.get('/device/:id', function (req, res) {
  Device.findOne({ _id: req.params.id })
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json(doc);
      }
    });
});

router.post('/device', function (req, res) {
  var newDevice = new Device(req.body);

  newDevice.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false
      });
    }
    else {
      res.status(200).json({
        success: true,
        _id: doc._id
      });
    }
  });
});

router.delete('/device/:id', function (req, res) {
    Device.find({ _id: req.params.id }).remove().exec(function(err) {
      if (err) {
        console.log(err);
        res.status(400).json({
          success: false
        });
      }
      else {
        res.status(200).json({
          success: true
        });
      }
    });
});

// router.update('/device/:id', function (req, res) {
//     Device.find({ _id: req.params.id }).remove().exec(function(err) {
//       if (err) {
//         console.log(err);
//         res.status(400).json({
//           success: false
//         });
//       }
//       else {
//         res.status(200).json({
//           success: true
//         });
//       }
//     });
// });

module.exports = router