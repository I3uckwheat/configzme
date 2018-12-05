const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})

// Import all models
require('./app/models/File');
require('./app/models/User');

const app = require('./app');

app.listen(7777);