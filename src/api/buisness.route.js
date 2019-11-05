const express = require('express');
const buisnessRoutes = express.Router();

// Require Business model in our routes module
let Buisness = require('./buisness.model');

// Defined store route
buisnessRoutes.route('/add').post(function (req, res) {
  let buisness = new Buisness(req.body);
  buisness.save()
    .then(buisness => {
      res.status(200).json({'buisness': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


buisnessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Buisness.findById(id, function (err, buisness){
        res.json(buisness);
    });
  });
  
  //  Defined update route
  buisnessRoutes.route('/update/:id').post(function (req, res) {
      Buisness.findById(req.params.id, function(err, buisness) {
      if (!buisness)
        res.status(404).send("data is not found");
      else {
          buisness.person_name = req.body.person_name;
          buisness.buisness_name = req.body.buisness_name;
          buisness.buisness_gst_number = req.body.buisness_gst_number;
  
          buisness.save().then(buisness => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
 
  buisnessRoutes.route('/delete/:id').get(function (req, res) {
      Buisness.findByIdAndRemove({_id: req.params.id}, function(err, buisness){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  
  module.exports = buisnessRoutes;