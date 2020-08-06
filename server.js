const express = require('express');

const server = express();

//routes
const userRouter = require('./users/userRouter')

//middleware functions
const logger = require('./middleware/logger')

server.use(logger)

server.use(express.json())
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/user', userRouter);

//custom middleware

module.exports = server;