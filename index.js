const http = require('http');

//const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
//var serverIP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

//console.log(port);
http.createServer((req,res)=>{
    res.end('a very simple nodejs test...');
}).listen(port,ip);


