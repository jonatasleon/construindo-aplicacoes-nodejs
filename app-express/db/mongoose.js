import mongoose from 'mongoose';
import debugBuilder from 'debug';
import config from 'config';

const debug = debugBuilder('app-express:db');

function _connection() {
  let username = config.get('mongo.username');
  let password = config.get('mongo.password');
  let server = config.get('mongo.server');
  let port = config.get('mongo.port');
  let database = config.get('mongo.database');

  let auth = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + server +  '/' + database;
}

debug(_connection())
mongoose.connect(_connection());
const db =  mongoose.connection;

db.on('error', (err) => {
  debug(err);
});

db.once('open', () => {
  debug('connected to mongodb');
});

export default db;
