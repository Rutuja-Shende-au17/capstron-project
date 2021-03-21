const express =require('express');
const {signup,signin,signout}=require("../controllers/auth");
const {userSignupValidator}=require("../validator");


const router= express.Router(); 


router.post("/signup",userSignupValidator,signup);
//signin
router.post("/signin",signin);
//signout
router.get("/signout",signout);


module.exports= router;