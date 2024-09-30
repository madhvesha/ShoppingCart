const express=require('express')
const cors=require('cors')
const bp=require('body-parser')
const PORT=9000
const myCon=require('./DbConnect')

const App=express()

App.use(bp.json())
App.use(cors({origin:"*"}))

//Get REST API  : TO fetch information about all Fruits from database table 
App.get("/api/getAllFruits",(req,resp)=>{
    myCon.query("select * from allfruits",(err,result)=>{
      if(err) console.log(err)
      else 
    resp.send(result)
    })
})

App.listen(PORT,err=>{
    if(err)
    console.log(err)
else
console.log("Connected to PORT=9000")
})