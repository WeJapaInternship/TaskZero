var http = require('http');
const { parse } = require('querystring');

/**
 * Create HTTP server.
 */

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            res.end(`Hello ${parse(body).name}, Welcome to WeJapa Internships`);
            // return console.log(body);
            
        });
    }
    else if(req.method ==='GET'){
        res.end('Hello World, Welcome to WeJapa Internships');
    }
  }).listen(3030);
