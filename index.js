require('dotenv').config()

const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.get('/' , (req , res)=>{
    res.send("Hello World !!")
})

app.get('/backend' , (req , res)=>{
    res.send("Learning Backend ❤️‍🔥🧑‍🎓")
})

app.listen(PORT , ()=>{
  console.log("Server is runnig this Port " + PORT );
})