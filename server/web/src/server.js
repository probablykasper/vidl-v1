"use strict";
// express
const express = require("express");
const app = express();

// local modules
require("./modules/init");

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// start server
const server = app.listen(process.env.PORT || 80, () => {
    console.log("Express server listening on " + process.env.PORT || 80);
});

app.get("/", (req, res) => {
    res.send("Nice, it works :)");
});

const WebSocket = require("ws");
const wss = new WebSocket.Server({server});
// routes
require("./modules/routes")(app, wss);
