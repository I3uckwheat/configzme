const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})

// Import all models
require('./app/models/User');

const app = require('./app');

app.listen(process.env.PORT || 7777);
