const express = require("express");
const app = express()

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27012/userDataBase", function(){
  try{
    console.log("server started at 27012");
  }
  catch(err){
    console.log(err);
  }
}
//,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const userDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: Int32Array,
  gender: String,
});

app.get("/", function(req, res){
    res.send("Hello");
})

app.listen("3000", function(){
  console.log("Server is started at 3000");
})
