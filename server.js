var express = require('express');
var shrinkpacker = require('./lib/middleware');
var path = require('path');

var app = express();
// app.use('/mod',express.static('mod'));

app.use('/zip',shrinkpacker({
    root: path.join(__dirname,"mod"),
    pack: path.join(__dirname,"zip")
}));

app.use(function(req,res){
    res.send(404,"not found");
});

app.listen(3000);

module.exports = app;