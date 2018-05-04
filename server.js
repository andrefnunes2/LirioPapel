// express
var express = require('express');
var path = require('path');
var app = express();

// middleware
var morgan = require('morgan');

// variables
var port = process.env.PORT || 8080;

// middleware
app.use(morgan('dev'));
app.use(express.static(__dirname + 'app'));
app.use(express.static(__dirname + 'node_modules'));

// server
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});
app.listen(port, function () {
    console.log('Running the server on port ' + port + '.');
});