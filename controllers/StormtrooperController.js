'use strict';

function StormtrooperController() {}

StormtrooperController.prototype.getAll = (req, res) => {
  res.send('get all stormtroopers');
};

StormtrooperController.prototype.getById = (req, res) => {
  res.send('get a specific stormtrooper by id');
};

StormtrooperController.prototype.create = (req, res) => {
  res.send('create a new stormtrooper');
};

StormtrooperController.prototype.update = (req, res) => {
  res.send('update a stormtrooper');
};

StormtrooperController.prototype.remove = (req, res) => {
  res.send('delete a stormtrooper');
};

module.exports = new StormtrooperController();
