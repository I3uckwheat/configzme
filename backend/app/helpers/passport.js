const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// requires the model with Passport-Local Mongoose plugged in
const User = require('../models/User');

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());