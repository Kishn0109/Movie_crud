const userdb=require('../model/model')

//create using put call
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new userdb({
        MovieName : req.body.MovieName,
        Language : req.body.Language,
        ReleaseDate: req.body.ReleaseDate,
        Budge : req.body.Budge,
        Collection:req.body.Collection
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
            // res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(800).send("error");
        });

}



//find data from database using get 

exports.find=(req,res)=>{
    if(req.query.id){
       const _id=req.query.id;
       const data_id=userdb.findById(_id);

    }
    else{
        userdb.find()
        .then(data=>{
            res.send(data);
        

        })
        .catch((e)=>{
            res.status(500).send(e);
        })
    }
}





//update data using put call 

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    userdb.findByIdAndUpdate(id, req.body, { new:true})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
                res.json({status: true, message: 'Employee updated Successfully'})


            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


//Delete using delete 

exports.delete=(req,res)=>{
    const id=req.params.id
    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(data){
            res.send({
                message:"succesfull"
            })
        }else{
            res.status(404).send({message:"empty data"})
            
        }
    })
    .catch((e)=>{
        res.status(500).send({
            message:"could not delete"
        })
    })
}
