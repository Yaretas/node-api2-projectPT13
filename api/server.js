const express = require("express");

const db = "./data/db.js";

//calling the server from index.js
const server = express();

//middleware creation
server.use(express.json());

//Create endpoints handler

// Export server
module.exports = server;
