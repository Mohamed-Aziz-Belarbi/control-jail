const conn = require('./model.js')

module.exports={
    //this function to get all the prisoners
    getAll:(req,res)=>{
        conn.getAll((err,result)=>{
            err? res.status(500).send(err):res.status(200).send(result)
        })
    },
    ////this function to get one prisoners
    getOne:(req,res)=>{
        
        conn.getOne((err,result)=>{
            err? res.status(500).send(err):res.status(200).send(result)
        },req.params.id)
    },
    //this function to add a new prisoner
    addPrisoner:(req,res)=>{
        conn.addPrisoner((err,result)=>
        {err? res.status(500).send(err):res.status(201).send(result)}
    ,[req.body.name,req.body.duration,req.body.degree,req.body.cells_idCell,req.body.image]) 
},
//this function to delete a prisoner
deletePrisoner:(req,res)=>{
    conn.deletePrisoner((err,result)=>{
        err? res.status(500).send(err):res.status(200).send(result)
    },req.params.id)
},

//this function to update a new prisoner
updatePrisoner:(req,res)=>{
    conn.updatePrisoner((err,result)=>{
        err? res.status(500).send(err):res.status(200).send(result)
    },req.params.id,req.body.name,req.body.duration,req.body.degree,req.body.image)
},

addCell:(req,res)=>{
    conn.addCell((err,result)=>
    {err? res.status(500).send(err):res.status(201).send(result)}
,[req.body.idCell]) 
}
}