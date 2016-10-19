import { Router } from 'express';
import jwt from 'jwt-simple';
import moment from 'moment';
import config from 'config';
import stormtrooperRoutes from './stormtroopers';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Construindo aplicações com Node.js'
  });
})
router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username.valueOf() === 'rebels' && password.valueOf() === '1138') {
    let expires = moment().add(7, 'days').valueOf();

    let token = jwt.encode({
      user: username,
      exp: expires
    }, config.get('jwtTokenScret'));

    res.json({ token });
  } else {
    let err = new Error('Unauthorized');
    err.status = 401;
    next(err);
  }
});
router.use('/stormtroopers', stormtrooperRoutes);

export default router;
