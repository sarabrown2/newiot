var express = require('express');
var router = new express.Router();
var Device = require ("../models/deviceModel.js");
var System = require ("../models/systemModel.js");

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
      res.status(201).json({
        success: true,
        _id: doc._id
      });
    }
  });
});

router.put('/device/:id', function (req, res) {
  Device.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.status(400).json({
          success: false
        });
      }
      else {
        res.status(200).json(doc);
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

// System routes
router.get('/system', function (req, res) {
  System.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json(doc);
      }
    });
});

router.get('/system/:id', function (req, res) {
  System.findOne({ _id: req.params.id })
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json(doc);
      }
    });
});

router.post('/system', function (req, res) {
  var newSystem = new System(req.body);

  newSystem.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false
      });
    }
    else {
      res.status(201).json({
        success: true,
        _id: doc._id
      });
    }
  });
});

router.put('/system/:id', function (req, res) {
  System.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.status(400).json({
          success: false
        });
      }
      else {
        res.status(200).json(doc);
      }
  });
});

router.delete('/system/:id', function (req, res) {
    System.find({ _id: req.params.id }).remove().exec(function(err) {
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

module.exports = router
