'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello');
});

router.post('/', function(req, res) {
  res.json({msg: "RETORNO DE UM POST"});
});

router.get('/resources', function(req, res) {
  res.json([{ name: 'Resource 1' }, { name: 'Resource 2' }]);
});

module.exports = router;
