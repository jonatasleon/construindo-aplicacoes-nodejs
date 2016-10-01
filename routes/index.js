'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello');
});

router.use('/stormtroopers', require('./stormtroopers'));

module.exports = router;
