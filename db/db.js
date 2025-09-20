const mongoose = require("mongoose");
require("dotenv").config();
const mongoURl = process.env.MONGO_URL_LOCAL;
mongoose
  .connect(mongoURl)
  const db = mongoose.connection;

  db.on('connected',()=>{
    console.log("Connected to MongoDB");
  })
  db.on('error', ()=>{
    console.log("Error connecting to MongoDB");
  })
  db.on('disconnected', ()=>{
    console.log("Disconnected from MongoDB");
  })
  module.exports = db;