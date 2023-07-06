const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema=new Schema({
name:{
    type:String,
  default:"",
},
email:{
    type:String,
    required:true,
    default:"",
  
},
password:{
    type:String,
    default:"",
    
}

},
{timestamps: true},
);

//create user model
const usermodel=mongoose.model("Usermodel",userschema);
module.exports=usermodel;