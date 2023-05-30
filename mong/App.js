const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var socketio = require('socket.io');
const color = require('colors');

var https = require("https");
var http = require("http");

const db = require("./node_details/db");
const config = require("./node_details/config")
const port = config.port;
const app = express();
var CRON = require('./CRON/cron');

app.set("port", 3501);
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/back', require('./Routers/back.router'))
app.use('/api/course', require('./Routers/course.router'))
app.use('/api/university', require('./Routers/university.router'))
app.use('/api/user', require('./Routers/rental.router'));
app.use('/api/advanced', require('./Routers/advanced.router'));
app.use('/api/train', require('./Routers/training.router'));

app.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
});

var httpServer = http.createServer(app);
httpServer.listen(3501, () => {
     console.log(`Http Server is Up and Running on http://localhost:${3501} `.rainbow);
});


