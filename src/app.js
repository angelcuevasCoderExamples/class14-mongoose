const express = require('express');
const userRouter = require('./routes/users.router')
const port = 8080; 

const app = express()

app.listen(port, ()=>`up and running on port ${port}`)