const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema=new Schema({
name:{
    type:String,
  default:"",
},
image:{
    type:String,
    default:"",
  
},
password:{
    type:String,
    default:"",
    
},
phone:{
    type:String,
    default:"",
    
},
role:{
    type:String,
    default:"",
    
},

},
{timestamps: true},
);

//create user model
const usermodel=mongoose.model("Usermodel",userschema);
module.exports=usermodel;