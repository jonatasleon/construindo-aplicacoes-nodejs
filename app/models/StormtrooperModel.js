'use strict';

function StormtropperModel(mongo) {
  this.mongo = mongo;
  this.collection = this.mongo.collection('stormtroopers');
}

StormtropperModel.prototype.find = function(query, callback) {
  this.collection.find(query, callback);
};

StormtropperModel.prototype.findOne = function(_id, callback) {
  let query = {_id: this.mongo.ObjectId(_id)};
  this.collection.findOne(query, callback);
};

StormtropperModel.prototype.create = function(data, callback) {
  this.collection.insert(data, callback);
};

StormtropperModel.prototype.update = function(_id, data, callback) {
  let query = {_id: this.mongo.ObjectId(_id)};
  this.collection.update(query, data, callback);
};

StormtropperModel.prototype.remove = function(_id, callback) {
  let query = {_id: this.mongo.ObjectId(_id)};
  this.collection.remove(query, callback);
};

module.exports = function(mongo) {
  return new StormtropperModel(mongo);
};
