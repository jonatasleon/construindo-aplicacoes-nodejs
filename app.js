'use strict';

const express = require('express');
const app = express();

app.use(function(req, res) {
  console.log('Isso é um middleware');
});

app.get('/', function(req, res) {
  res.send('Hello');
});
