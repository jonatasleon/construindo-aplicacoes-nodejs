import jwt from 'jwt-simple';
import moment from 'moment';
import config from 'config';

export function handleNotFound(data) {
  if (!data || data.hasOwnProperty('error')) {
    let err = new Error(data.error || 'Not found' );
    err.status = data.statusCode || 404;

    throw err;
  }

  return data;
}

export function auth(req, res, next) {
  let token = req.query.token || req.headers['x-access-token'];

  if (!token) {
    let err = new Error('Forbidden');
    err.status = 403;

    next(err);
  }

  try {
    let decoded = jwt.decode(token, config.get('jwtTokenScret'));
    let isExpired = moment(decoded.exp).isBefore(new Date());

    if (isExpired) {
      let err = new Error('Unauthorized');
      err.status = 401;

      return next(err);
    } else {
      req.user = decoded.user;
      next();
    }
  } catch(err) {
    return next(err);
  }
}
