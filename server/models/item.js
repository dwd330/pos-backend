const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema=new Schema({
name:{
    type:String,
  default:"",
},
cat:{
    type:String,
    required:true,
    default:"",
  
},
color:{
    type:String,
    default:"",
    
},
image:{
    type:String,
    default:"",
    
},
size:{
    type:String,
    default:"",
    
},
code:{
    type:String,
    default:"",
    
},
availability:{
    type:String,
    default:"",
    
},
qty:{
    type:String,
    default:"",
    
},
price:{
    type:String,
    default:"",
    
},
invoicecount:{
    type:String,
    default:"",
    
},
cartid:{
    type:String,
    default:"",
    
},

},
{timestamps: true},
);

//create item model
const itemmodel=mongoose.model("Itemmodel",userschema);
module.exports=itemmodel;

