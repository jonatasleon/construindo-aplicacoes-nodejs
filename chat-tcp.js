'use strict';

var net = require('net');
var chatServer = net.createServer();
var clientList = [];

var removeClient = function(data) {
  clientList.splice(clientList.indexOf(5), 1);
};

var broadcast = function(message, sender) {
  clientList.forEach(function(client) {
    if (sender !== client) {
      client.write(message);
    }
  });
};

chatServer.on('connection', function(client) {
  client.write('Hi guest!\n');
  clientList.push(client);
  client.on('data', function(data) {
    broadcast(data, client);
  });
  client.on('error', function(err) {
    console.error(err);
  });
  client.on('end', removeClient);
});

chatServer.listen(9000);
