const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds115154.mlab.com:15154/configzme`, {useNewUrlParser: true})

// Import all models
require('./app/models/User');
require('./app/models/File');

const app = require('./app');

app.listen(7777);