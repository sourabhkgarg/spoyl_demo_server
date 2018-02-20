'use strict';

var express = require('express');
var bodyParser = require("body-parser"); // express server
var path = require('path'); // to make paths absolute
var app = express(); // initializing app.

app.use(bodyParser.json());

var routes = require('./serverRoute/serverRoute');

app.use('/static', express.static(path.join(__dirname, '../static'))); // setting paths for static
// setting paths for favicon


app.use('/', routes);

app.listen(3000); // listening to port 3000