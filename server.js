const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });



const server = express();

//mongoose setup
const DB = process.env.DATABASE;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('MONGODB Connected...');
}).catch((err) => {
  console.log('Not Connected...')
})



server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World!!");
});


// PORT Connected
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server runnning at port ${PORT}`);
});
