const express=require('express');
const app=express();
const dotenv=require("dotenv")
const morgan =require("morgan");
const bodyparser=require('body-parser');
const connectdb=require('./main_server/database/connection') 
app.use(express.json())


const PORT=process.env.PORT||8000


dotenv.config({Path:'confir,env'})
//log reuest 
app.use(morgan("tiny"))
//parsar request to body parsar
connectdb()






//all routes are here
app.use('/',require('./main_server/model/router'));













app.listen(PORT,()=>{
    console.log(`you are connected on ${PORT}`);
})
