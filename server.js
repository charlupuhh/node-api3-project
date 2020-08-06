const express = require('express');
const moment = require('moment');
const server = express();

//routes
const userRouter = require('./users/userRouter')

//middleware functions

server.use(express.json())
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/user', userRouter);

//custom middleware
function logger(req, res, next){
  const timeStamp = moment().format()
  console.log(`${req.method} ${req.url} ${timeStamp} `);

  next()
}

module.exports = server;