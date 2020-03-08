const express = require('express');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const app = express();

app.use(cors());

// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false, sameSite: false},
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

require('./helpers/passport');

// To support JSON-encoded bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Setting up passport
require('./handlers/passport');

// Setting up routes
const routes = require('./routes');
app.use('/', routes);

// Error handling
app.use((err, req, res, next) => {
  next(err);
});

module.exports = app;
