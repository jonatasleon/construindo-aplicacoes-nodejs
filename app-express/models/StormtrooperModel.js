import { Types } from 'mongoose';

const stormtrooperSchema = (mongoose) => {
  return mongoose.model('Stormtrooper', {
    name: String,
    nickname: String,
    divisions: [String],
    patent: String,
  });
};

export default class StormtropperModel {
  constructor(mongoose) {
    this.model = stormtrooperSchema(mongoose);
  }

  create(data, callback) {
    let model = new this.model(data);
    model.save((err, result) => {
      callback(err, result);
    });
  }

  find(query, callback) {
    this.model.find(query).exec(callback);
  }

  findOne(_id, callback) {
    let query = { _id };
    this.model.findOne(query).exec(callback);
  }

  update(_id, data, callback) {
    let query = { _id };
    this.model.update(query, data).exec(callback);
  }

  remove(_id, callback) {
    let query = { _id };
    this.model.remove(query).exec(callback);
  }

}
