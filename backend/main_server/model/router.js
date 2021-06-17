const express=require("express")
const rout=express.Router();
const controller=require('../controller/controller')
rout.get('/',(req,res)=>{
    res.send("yor are in home");
})
rout.get('/add-user',(req,res)=>{
    res.send("you are in add-user page")
})
rout.get('/update-data',(req,res)=>{
    res.send("you are in update-data")
});


rout.post('/user',controller.create);
rout.get('/api/user',controller.find);
rout.put('/api/user/:id',controller.update);
rout.delete('/api/user/:id',controller.delete);





module.exports = rout