const router =require('express').Router();
const itemmodel=require('../models/item.js')


//get all items
router.get('/',async(req,res)=>{
  try {
    const items = await itemmodel.find({});
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

}); 

//get an item by cat
router.get('/item',async(req,res)=>{
  try {
    const items = await itemmodel.find({ "cat":req.query.cat });
    console.log(items);
    res.json(items);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//get a item by id
router.get('/item/:itemid',async(req,res)=>{
  try {
    const item = await itemmodel.findById(req.params.itemid);
    res.json(item);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//delete a item by id
router.delete('/item/:itemid',async(req,res)=>{
  try {
    const item = await itemmodel.findByIdAndRemove(req.params.itemid);
    console.log(item);
    res.json(item);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//update a item by id
router.patch('/item/:itemid',async(req,res)=>{
  try {
    const item = await itemmodel.findByIdAndUpdate(req.params.itemid,{$set:{name:req.body.name}});
    console.log(item);
    res.json(item);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
router.post('/',async(req,res)=>{

  try {
   const item =new itemmodel(
    {
      "name":req.body.name,
      "cat":req.body.cat,
      "price":req.body.price,
      "qty":req.body.qty,
    }
   )
   //send new data 
   try{
    const saveditem=await item.save();
    res.status(200).json(saveditem)
   }catch(err){
    res.json({"message":err})
   }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }

}); 

module.exports=router;