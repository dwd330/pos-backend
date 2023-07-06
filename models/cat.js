const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema=new Schema({
name:{
    type:String,
  default:"",
},
image:{
    type:String,
    required:true,
    default:"",
  
},
catitemslist:{
    type:Array,
    default:"",
    
}

},
{timestamps: true},
);

//create cat model
const catmodel=mongoose.model("catmodel",userschema);
module.exports=catmodel;


  