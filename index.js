 const express = require('express'); 
 const app = express()

app.get("/home",(req,res)=>{
  res.send({message:"home page"})
})

 app.listen(3000)