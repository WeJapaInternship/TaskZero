var app = require('../app');
var http = require('http');

/**
 * Create HTTP server.
 */

http.createServer(app).listen(3030);
