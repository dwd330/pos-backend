const express =require('express');
const app =express();
const mongoose=require('mongoose');
//import routes 
const userssroute=require('./routes/users');
const itemsroute=require('./routes/items');  
const invoicesroute=require('./routes/invoices'); 

//connect to DB
const DBname="posDB";
const DBUri= "mongodb+srv://user:vKZrEkpqLNEk2oBU@pos.7oly5gw.mongodb.net/"+DBname;
 mongoose.connect(DBUri);

//middleware
app.use(express.json());
 
//route middleware
app.use('/api/users',userssroute); 
app.use('/api/items',itemsroute); 
app.use('/api/invoices',invoicesroute); 

app.listen('3000',()=>console.log("listen on port 3000"))