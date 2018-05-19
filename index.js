
const http = require('http');
const express = require('express');

var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


    
/*
http.createServer((req,res)=>{
    res.end('<h1>yet another test...</h1>');
}).listen(port,ip);
*/

app.get('/',(req,res,next)=>{
    res.send('testing express npm module...');
});

app.listen(port,ip);



