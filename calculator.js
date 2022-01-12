//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


//normal calculator
//link another file
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

//get all data to this function and send the results back
app.post("/", function(req,res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The result of the calculation is :" + result);
});

//BMI calculator
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){

  var weight1 = parseFloat(req.body.weight);
  var height1 = parseFloat(req.body.height);

  var bmi = weight1 / (height1 * height1) ;
  res.send("Your BMI  is :" + bmi);
});

app.listen(3000,function(){
  console.log("server is running on port 3000. ");
});
