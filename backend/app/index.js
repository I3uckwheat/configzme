const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const app = express();

app.set('etag', false)

// Prevent caching
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  next();
})


// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false, sameSite: false},
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());
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
