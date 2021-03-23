const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config({ path: './config.env' });

const noteRouter = require('./routes/notesRouter');
const userRouter = require('./routes/userRouter');

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
server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello World!!");
});

server.use('/users', userRouter);
server.use('/notes', noteRouter);
// PORT Connected
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server runnning at port ${PORT}`);
});
