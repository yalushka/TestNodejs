const http = require('http');

const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var serverIP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

//console.log(port);
http.createServer((req,res)=>{
    res.end('This is a nodejs test...');
}).listen(port,serverIP);


