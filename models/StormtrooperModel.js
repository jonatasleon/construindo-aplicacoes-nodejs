'use strict';

function StormtropperModel(mongo) {
  this.mongo = mongo;
  this.collection = this.mongo.collection('stormtroopers');
}

StormtropperModel.prototype.find = (query, callback) => {
  this.collection
    .find(query, callback);
};

StormtropperModel.prototype.findOne = (_id, callback) => {
  let query = {_id: this.mongo.ObjectId(_id)};
  this.collection
    .findOne(query, callback);
};

StormtropperModel.prototype.create = (data, callback) => {
  this.collection
    .insert(data, callback);
};

StormtropperModel.prototype.update = (_id, data, callback) => {
  let query = {_id: this.mongo.ObjectId(_id)};
  this.collection
    .update(query, data, callback);
};

StormtropperModel.prototype.remove = (_id, callback) => {
  let query = {_id: this.mongo.ObjectId(_id)};
  this.collection
    .remove(query, callback);
};

module.exports = (mongo) => new StormtropperModel(mongo);
