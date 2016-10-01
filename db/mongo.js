'use strict';

const mongojs = require('mongojs');
const config = require('config');
const debug = require('debug')('livro_nodejs:db');

function _connection() {
  const username = config.get('mongo.username');
  const password = config.get('mongo.password');
  const server = config.get('mongo.server');
  const port = config.get('mongo.port');
  const database = config.get('mongo.database');
  const auth = username ? username + ':' + password + '@' : '';
  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

var db = mongojs(_connection());
db.on('error', (err) => {
  debug(err);
});

module.exports = db;
