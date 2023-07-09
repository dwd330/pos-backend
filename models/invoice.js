const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema=new Schema({
date:{
    type:String,
  default:"",
},
payed:{
    type:String,
    required:true,
    default:"",
  
},
paymentmethod:{
    type:String,
    required:true,
    default:"",
  
},
username:{
    type:String,
    required:true,
    default:"",
  
},
serial:{
    type:String,
    required:true,
    default:"",
  
},
total:{
    type:String,
    required:true,
    default:"",
  
},
discount:{
    type:String,
    required:true,
    default:"",
  
},
finalpayamount:{
    type:String,
    required:true,
    default:"",
  
},
invoiceitemslist:{
    type:Array,
    default:[],

    
}

},
{timestamps: true},
);

//create cat model
const invoicemodel=mongoose.model("invoicemodel",userschema);
module.exports=invoicemodel;


  