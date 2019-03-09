// let's go!
require('dotenv').config()
const createServer = require('./createServer');

const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTED_URL
  }
}, deets => {
  console.log(`Server is running on http://localhost:${deets.port}`);
});

