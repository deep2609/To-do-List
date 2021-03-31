const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use(express.static("public"));

var items=[];

app.get("/",function(req,res){
  var today=new Date();

  var options={
    weekday: "long",
    day: "numeric",
    month: "long"

  };
  var day = today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay: day,listOfItems: items});
});

app.post("/",function(req,res){
   var newItem = req.body.newItem;
   items.push(newItem);
   res.redirect("/");
   //console.log(newItem);
});
app.listen(3000,function(){
   console.log("server is up and running at port 3000!!");
});
