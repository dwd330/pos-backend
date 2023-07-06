const router =require('express').Router();
const invoicemodel=require('../models/invoice.js')


//get all invoices
router.get('/',async(req,res)=>{
  try {
    const invoices = await invoicemodel.find({});
    res.json(invoices);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

}); 

//get an invoice by cat
router.get('/invoice',async(req,res)=>{
  try {
    const invoices = await invoicemodel.find({ "cat":req.query.cat });
    console.log(invoices);
    res.json(invoices);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//get a invoice by id
router.get('/invoice/:invoiceid',async(req,res)=>{
  try {
    const invoice = await invoicemodel.findById(req.params.invoiceid);
    res.json(invoice);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//delete a invoice by id
router.delete('/invoice/:invoiceid',async(req,res)=>{
  try {
    const invoice = await invoicemodel.findByIdAndRemove(req.params.invoiceid);
    console.log(invoice);
    res.json(invoice);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//update a invoice by id
router.patch('/invoice/:invoiceid',async(req,res)=>{
  try {
    const invoice = await invoicemodel.findByIdAndUpdate(req.params.invoiceid,{$set:{name:req.body.name}});
    console.log(invoice);
    res.json(invoice);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
router.post('/',async(req,res)=>{

  try {
   const invoice =new invoicemodel(
    {
      "date":req.body.date,
      "payed":req.body.payed,
      "paymentmethod":req.body.paymentmethod,
      "username":req.body.username,
      "serial":req.body.serial,
      "total":req.body.total,
      "discount":req.body.discount,
      "finalpayamount":req.body.finalpayamount,
      "catitemslist":req.body.catitemslist,
     
    }
   )
   //send new data 
   try{
    const savedinvoice=await invoice.save();
    res.status(200).json(savedinvoice)
   }catch(err){
    res.json({"message":err})
   }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

}); 

module.exports=router;