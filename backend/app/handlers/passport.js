const passport = require('passport');
const mongoose = require('mongoose');
const Users = mongoose.model('Users');

passport.use(Users.createStrategy());

passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());