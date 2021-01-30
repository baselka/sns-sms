//app.js
const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
const AWS = require('aws-sdk'); //npm install aws-sdk
require('dotenv').config()
global.sns = new AWS.SNS({apiVersion: '2010–03–31'});

const app = express();
const PORT = '3000'
app.set('port', PORT); 

/** CORS */
app.use(function(req, res, next) {
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// allow json within request for jwt
app.use(express.json())

app.options('*', cors())

app.get("/", (req, res) => {
    res.json({ message: `Welcome this is SNS SMS Simple app `  });
});
require("./app/routes/index.js")(app);

app.listen(PORT, () => {
    console.log(`Up and Running ${PORT}.`);
});