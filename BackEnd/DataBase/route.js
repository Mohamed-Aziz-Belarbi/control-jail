const express=require('express')
const router =express.Router()

const{getAll,getOne,addPrisoner,deletePrisoner,updatePrisoner,addCell}=require('./controller')

router.get('/',getAll)
router.get('/:name',getOne)
router.post("/add",addPrisoner)
router.post("/cell",addCell)
router.delete('/:id',deletePrisoner)
router.put("/:id",updatePrisoner)
module.exports=router