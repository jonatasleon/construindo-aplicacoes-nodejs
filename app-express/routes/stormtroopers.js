import { Router } from 'express';
import passport from 'passport';
import mongo from '../db/mongoose';
import StormtrooperModel from '../models/StormtrooperModel';
import StormtrooperController from '../controllers/StormtrooperController';
import { handleNotFound, auth } from './helpers';

const stormtrooperModel = new StormtrooperModel(mongo);
const stormtrooperController = new StormtrooperController(stormtrooperModel);

const router = new Router();

router.get('/', passport.authenticate('basic', { session: false }), (req, res) => {
  stormtrooperController.getAll()
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
});

router.get('/:id', auth, (req, res) => {
  stormtrooperController.getById(req.params.id)
    .then(handleNotFound)
    .then((response) => {
      console.log(response);
      res.status(response.statusCode);
      res.json(response.data);
    });
});

router.post('/', (req, res) => {
  stormtrooperController.create(req.body)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
});

router.put('/:id', (req, res) => {
  stormtrooperController.update(req.body, req.params.id)
    .then((response) => {
      res.status(response.statusCode);
      res.json(response.data);
    });
});

router.delete('/:id', (req, res) => {
  stormtrooperController.delete(req.params.id)
    .then((response) => {
      res.sendStatus(response.statusCode);
    });
});

export default router;
