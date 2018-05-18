const http = require('http');

const port = process.env.port || 3000;

//console.log(port);
http.createServer((req,res)=>{
    res.end('This is a nodejs test...');
}).listen(port);

