const express = require('express');
const userRouter = require('./routes/users.router')
const port = 3000;
const mongoose = require('mongoose');

const app = express()

mongoose.connect(`mongodb+srv://angelpablocuevas1989:EghP7p3eTEtgWPyu@codercluster.5ny2sqo.mongodb.net/`).then(()=>{
    console.log("connected")
}).catch(err=>{
    console.log(err)
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port, ()=>console.log(`up and running on port ${port}`))
app.use('/api/users', userRouter)