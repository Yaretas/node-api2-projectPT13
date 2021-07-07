const express = require("express");

//Calling the router file
const dbRouter = require('../data-router/db-router.js');

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

// the router handles endpoints that begin with /api/posts
server.use('/api/posts', dbRouter);
//the router only cares about what comes after /api/posts in this instance.

// Export server
module.exports = server;