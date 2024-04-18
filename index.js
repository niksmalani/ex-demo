 const express = require('express'); 
 const app = express()

app.get("/home",async (req,res)=>{

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  res.send({products:products})
})

 app.listen(3000)