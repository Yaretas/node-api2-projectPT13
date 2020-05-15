const express = require("express");

const db = "./data/db.js";

//calling the server from index.js
const server = express();

//middleware creation
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Lambda USERDATA</h1>
        <p>Pease create a request to retrieve or update the information on the database</p>
    `);
});

//Create endpoints handler

server.get('/', (req, res) => {});

server.get('/', (req, res) => {});

server.post('/', (req, res) => {});

server.delete('/', (req, res) => {});

server.post('/', (req, res) => {});


// Export server
module.exports = server;