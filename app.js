var router = require('./router.js');

// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile lookups and serve our templates via HTTP

// Create a Web Server
var http = require('http');
var https = require('https');
var port = 8000;

http.createServer(function(request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(port);
console.log('Server running at http://<workspace-url>:' + port.toString() + '/');

