const conn=require("../index.js")
module.exports={
    
getAll: (callBack)=>{
    const sql="SELECT * FROM prisoners"

    conn.query(sql,function(err,result){
        callBack(err,result)
    })
},
getOne: (callBack,id)=>{
    console.log(id,'the id ');
    const sql="SELECT * FROM prisoners where idPrisoner=" + id

    conn.query(sql,function(err,result){
        callBack(err,result)
    })
},
addPrisoner:(callBack,name,duration,degree,image,id)=>{
    
    const sql="insert into prisoners (name,duration,degree,cells_idCell,image) values (?)"
    conn.query(sql,[name,duration,degree,image,id],(err,result)=>{
callBack(err,result)
    })
},
addCell:(callBack,idCell)=>{
    
    const sql="insert into cells (idCell) values (?)"
    conn.query(sql,[idCell],(err,result)=>{
callBack(err,result)
    })
},
deletePrisoner:(callBack,id)=>{
    const sql="delete from prisoners where idPrisoner=?"
    conn.query(sql,id,(err,result)=>{
        callBack(err,result)
    })
},
updatePrisoner:(callBack,id,name,duration,degree,image)=>{
    
    const sql="update prisoners SET name=?,duration=?,degree=?,image=? where idPrisoner=?"
     conn.query(sql,[name,duration,degree,image,id],(err,result)=>{
        callBack(err,result)
     })
    }

};