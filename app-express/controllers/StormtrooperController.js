import HttpStatus from 'http-status';
import Promise from 'bluebird';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorReponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

export default class StormtrooperController {
  constructor(StormtrooperModel) {
    this.model = Promise.promisifyAll(StormtrooperModel);
  }

  getAll() {
    return this.model.findAsync({})
      .then(result => defaultResponse(result))
      .catch(err => errorReponse(err.message));
  }

  getById(_id) {
    return this.model.findOneAsync(_id)
      .then(result => defaultResponse(result))
      .catch(err => errorReponse(err.response));
  }

  create(data) {
    return this.model.createAsync(data)
      .then(result => defaultResponse(result))
      .catch(err => errorReponse(err.response));
  }

  update(data, _id) {
    return this.model.updateAsync(_id, data)
      .then(result => defaultResponse(result))
      .catch(err => errorReponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  delete(_id) {
    return this.model.removeAsync(_id)
      .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
      .catch(err => errorReponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}
