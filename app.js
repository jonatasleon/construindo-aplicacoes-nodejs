'use strict';

const express = require('express');
const app = express();

app.use(function(req, res, next) {
  console.log('Isso é um middleware');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello');
});
