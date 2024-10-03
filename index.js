const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000


mongoose.connect('mongodb://localhost:27017/nodetestforgitconact')
.then(()=>{
    console.log("mongodb connact");
})
.catch((error)=>{
    console.log(error);
    
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})