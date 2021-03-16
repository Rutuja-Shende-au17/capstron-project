const express=require("express");
const app=express();
const morgan=require("morgan");
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
/*
const myownMiddelware=(req,res,next)=>{
    console.log("middleware applied");
    next();
};*/
//middleware
app.use(morgan("dev"));
app.use("/",postRoutes);

const port=process.env.PORT||8080;
app.listen(port,() =>{
    console.log(`a node ja api is listeining on port no.&{port}`);
});