const express=require("express");
const app=express();
const morgan=require("morgan");
const bodyparser =require("body-parser");
var cookieParser = require('cookie-parser')
const expressValidator=require('express-validator')
const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config()

//db
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true})
.then(()=> console.log("DB CONNECTED"))

mongoose.connection.on('error',err=>{
    console.log(`DB CONNECTION ERROR:$(err.message)`);
});


//bring in routes
const postRoutes=require("./routes/post.js");
const authRoutes=require("./routes/auth.js");
const bodyParser = require("body-parser");
/*
const myownMiddelware=(req,res,next)=>{
    console.log("middleware applied");
    next();
};*/
//middleware
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use("/",postRoutes);
app.use("/",authRoutes);
const port=process.env.PORT||8080;
app.listen(port,() =>{
    console.log(`a node ja api is listeining on port no.&{port}`);
});