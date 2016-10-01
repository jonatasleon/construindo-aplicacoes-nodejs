'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get all stormtroopers');
});

router.get('/:_id', (req, res) => {
  res.send('get a specific stormtrooper by id');
});

router.post('/', (req, res) => {
  res.send('create a new stormtrooper');
});

router.put('/:_id', (req, res) => {
  res.send('update a stormtrooper');
});

router.delete('/:_id', (req, res) => {
  res.send('delete a stormtrooper');
});

module.exports = router;
