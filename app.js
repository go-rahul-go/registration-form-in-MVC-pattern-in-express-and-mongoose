const express=require("express");
const bodyParser=require("body-parser")
const app=express();

app.use("/images",express.static(__dirname+"/assets"));
app.use("/public",express.static(__dirname+"/public"));

//middleware to read form data
app.use(bodyParser.urlencoded({extended:true}))

app.set("views","./views");
app.set("view engine","ejs");

const getapi = require("./routes/getApi");
const postapi =require("./routes/postApi")

app.use("",getapi)
app.use("",postapi);

app.listen(5000,()=>{console.log("server running at port 5000")})