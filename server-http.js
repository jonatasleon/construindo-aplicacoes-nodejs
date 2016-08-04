'use strict';

var http = require('http');

var routes = function(url) {
  var pathPairs = {
    '/': 'Hello World\n',
    '/contato': 'jonatas.leon@haha.com\n',
    '/404': 'Not found\n'
  };

  return pathPairs[url] || pathPairs['/404'];
}

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes(req.url));
});

server.listen(1337, 'localhost');
console.log('Magic happens at http://localhost:1337');
