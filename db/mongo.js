'use strict';

const mongojs = require('mongojs');
const config = require('config');
const debug = require('debug')('livro_nodejs:db');

function _connection() {
  let username = config.get('mongo.username');
  let password = config.get('mongo.password');
  let server = config.get('mongo.server');
  let port = config.get('mongo.port');
  let database = config.get('mongo.database');

  let auth = username ? username + ':' + password + '@' : '';
  
  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

const db = mongojs(_connection());
db.on('error', (err) => {
  debug(err);
});

module.exports = db;
