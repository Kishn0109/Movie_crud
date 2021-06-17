const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    MovieName:{
        type:String,
        required:true

    },
    Language:{
        type:String,
        required:true
    },
    ReleaseDate:{
        type:Date,
        required:true
    },
    Budge:{
        type:Number,
        required:true
    },
    Collection:{
        type:Number,
        required:true
    }
})
const userdb=mongoose.model('userdb',schema);
module.exports=userdb;