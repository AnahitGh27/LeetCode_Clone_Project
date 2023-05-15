import http from 'http';
import fs from 'fs';

const port = 3000;
const server = http.createServer((req, res) => {
    console.log("server is runing");
    let body;

    if (req.method === 'POST' && req.url === '/api/submit') {
      req.on('data', function(chunk) {
        body = chunk;
        const script = JSON.parse(chunk).script;
        const lang = JSON.parse(chunk).lang
        if (lang === 'javascript') {
          const file = fs.createWriteStream('./Submits/submit.js');
          file.write(script);
        } else if (lang === 'c++') {
          const file = fs.createWriteStream('./Submits/submit.cpp');
          file.write(script);
        } else if (lang === 'python') {
          const file = fs.createWriteStream('./Submits/submit.py');
          file.write(script);
        } else if (lang === 'java') {
          const file = fs.createWriteStream('./Submits/submit.java');
          file.write(script);
        }
      });
      req.on('end', function() {
        //console.log(JSON.parse(body)); // This will log the request body received from the front-end
        //res.setHeader('Content-Type', 'application/json');
        //res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('POST request received');
      });
    } else if (req.method === 'POST' && req.url === '/api/test') {
        req.on('data', function(chunk) {
          body = chunk;
          const script = JSON.parse(chunk).script;
          const lang = JSON.parse(chunk).lang
          if (lang === 'javascript') {
            const file = fs.createWriteStream('./Tests/test.js');
            file.write(script);
          } else if (lang === 'c++') {
            const file = fs.createWriteStream('./Tests/test.cpp');
            file.write(script);
          } else if (lang === 'python') {
            const file = fs.createWriteStream('./Tests/test.py');
            file.write(script);
          } else if (lang === 'java') {
            const file = fs.createWriteStream('./Tests/test.java');
            file.write(script);
          }
        });
      req.on('end', function() {
        const readfile = fs.createReadStream('./Tests/test.js')
        console.log(readfile.read());
        //console.log(JSON.parse(body)); // This will log the request body received from the front-end
        //res.setHeader('Content-Type', 'application/json');
        //res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('POST request received');
      });
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
  
  server.listen(port);