const connection=require("./index")
const express = require('express')
const cors = require('cors')
const app=express()
const route=require("./DataBase/route.js")

app.use(cors())
app.use(express.json())


app.use("/prisoner",route)



app.listen(5000,()=>console.log(`server is listening on 5000`))