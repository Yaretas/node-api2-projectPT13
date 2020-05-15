// Create a server and start listening
const server = require("./api/server.js");

const PORT = 4000;

server.listen(4000, () => {
  console.log(`\n *** Server is running on http://localhost:${PORT} *** \n`);
});
