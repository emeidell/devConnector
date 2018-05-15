const express = require("express");
const mongoose = require("mongoose");


const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(db)
  .then(() => {
    console.log("Connection to MongoDB established")
  }).catch((err) => {
    console.log("Connection to Mongo Failed", err)
  });

app.get("/", (req, res) => {
  res.send("Hello world")
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${5000}`))