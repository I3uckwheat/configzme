const express = require('express');
const app = express();

// To support JSON-encoded bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Setting up passport
require('./handlers/passport');

// Setting up routes
const routes = require('./routes');
app.use('/', routes);

module.exports = app;