require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds115154.mlab.com:15154/configzme`, {useNewUrlParser: true})

const app = require('./app');

app.listen(7777);