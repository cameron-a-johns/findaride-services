"use strict";
require('rootpath')();
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var errorHandler = require('_helpers/error-handler');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// api routes
app.use('/users', require('./users/users.controller'));
// global error handler
app.use(errorHandler);
// start server
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
