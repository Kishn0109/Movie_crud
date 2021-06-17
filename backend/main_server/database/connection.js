const mongoose=require('mongoose');
const connectdb=async()=>{
    try{
        const con=await mongoose.connect('mongodb+srv://Kishn0109:Nikhil@8447@cluster0.6djmp.mongodb.net/movie_crud?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useFindAndModify:true,
            useCreateIndex:true,
            useUnifiedTopology:false
        })
        console.log("success")
        
    }
    catch(error){
            console.log(error);
            process.exit(1)
    }
}
module.exports=connectdb