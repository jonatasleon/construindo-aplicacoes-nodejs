'use strict';

const express = require('express');
const app = express();

let counter = 0;

app.use(function(req, res, next) {
  counter += 1;
  console.log('Isso é um middleware', counter);
  next();
});

app.get('/', function(req, res) {
  res.send('Hello');
});

app.post('/', function(req, res) {
  res.json({msg: "RETORNO DE UM POST"});
});

app.get('/resources', function(req, res) {
  res.json([{msg: "GET ROSOURCES"}]);
});

app.listen(3000, () => {
  console.log('Magic are happening at port 3000');
});
