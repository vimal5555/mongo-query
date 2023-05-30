const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbConnection)

     .then((res) => { console.log('DB connected Successfully'.magenta) })
     .catch((err) => { console.log(err) });

mongoose.connection.on('connected', function () {
     console.log(`Front Mongoose default connection open`.green);
});

mongoose.connection.on('error', function (err) {
     console.log(`Front Mongoose default connection error: ${err}`.red);
});

mongoose.connection.on('disconnected', function () {
     console.log(`Front Mongoose default connection disconnected`.red);
});

process.on('SIGINT', function () {
     mongoose.connection.close(function () {
          console.log(`Front Mongoose default connection disconnected through app termination`.red);
          process.exit(0);
     });
});

require('../Models/back.model')
require('../Models/university.model')
require('../Models/university.model')