var port = 8080;

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.url, function(err){
    if(err){
        console.log('Impossible de se connecter a la base');
    }else{
        console.log('connection a la base: ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
  
app.listen(port, function(){
    console.log('server turn on port :' + port);
});