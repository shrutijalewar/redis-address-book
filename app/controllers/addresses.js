'use strict';
var Address = require('../models/address');

exports.new = function(req, res){
  res.render('addresses/new');
};
exports.index = function(req, res){
  Address.findAllByUserId(res.locals.user._id, function(err, addresses){
    res.render('addresses/index', {addresses:addresses});
  });
};
exports.create = function(req, res){
  Address.create(req.body, res.locals.user._id, function(err, addresses){
    res.redirect('/addresses', {addresses:addresses});
  });
};
