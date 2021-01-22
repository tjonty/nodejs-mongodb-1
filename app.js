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


app.get("/", function(req, res){
    res.send("Hello");
})

app.listen("3000", function(){
  console.log("Server is started at 3000");
})
