'use strict';

function StormtrooperController(StormtrooperModel) {
  this.model = StormtrooperModel;
}

StormtrooperController.prototype.getAll = function(req, res, next) {
  this.model.find({}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
};

StormtrooperController.prototype.getById = function(req, res, next) {
  let _id = req.params._id;
  this.model.findOne(_id, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
};

StormtrooperController.prototype.create = function(req, res, next) {
  let stormtrooper = req.body;
  this.model.create(stormtrooper, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
};

StormtrooperController.prototype.update = function(req, res, next) {
  let _id = req.params._id;
  let stormtrooper = req.body;
  this.model.update(_id, stormtrooper, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
};

StormtrooperController.prototype.remove = function(req, res, next) {
  let _id = req.params._id;
  this.model.remove(_id, (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
};

module.exports = StormtrooperModel => {
  return new StormtrooperController(StormtrooperModel);
};
