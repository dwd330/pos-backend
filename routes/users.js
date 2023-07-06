const router =require('express').Router();
const usermodel=require('../models/user.js')


//get all users
router.get('/',async(req,res)=>{
  try {
    const users = await usermodel.find({});
    res.json(users);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

}); 

//get a user
router.get('/user',async(req,res)=>{
  try {
    const users = await usermodel.find({ "name":req.query.name });
    console.log(users);
    res.json(users);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//get a user by id
router.get('/user/:userid',async(req,res)=>{
  try {
    const user = await usermodel.findById(req.params.userid);
    console.log(user);
    res.json(user);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//delete a user by id
router.delete('/user/:userid',async(req,res)=>{
  try {
    const user = await usermodel.findByIdAndRemove(req.params.userid);
    console.log(user);
    res.json(user);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
//update a user by id
router.patch('/user/:userid',async(req,res)=>{
  try {
    const user = await usermodel.findByIdAndUpdate(req.params.userid,{$set:{name:req.body.name}});
    console.log(user);
    res.json(user);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

});
router.post('/',async(req,res)=>{
  try {
   const user =new usermodel(
    {
      "id":req.body.id,
      "name":req.body.name,
      "phone":req.body.phone,
      "password":req.body.password,
      "role":req.body.role,
      "image":req.body.image,
    }
   )
   //send new data 
   try{
    const saveduser=await user.save();
    res.status(200).json(saveduser)
   }catch(err){
    res.json({"message":err})
   }

  } catch (e) {
    res.status(500).json({ error: e.message });
  }

}); 

module.exports=router;