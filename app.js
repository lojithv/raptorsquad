const express = require('express')
const app = express()
const mongoose = require('mongoose')
const customer = require('./routes/customer')
const agent = require('./routes/agent')
const admin = require('./routes/admin')
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/agent', agent)
app.use('/customer', customer)
app.use('/admin', admin)

app.listen(port, ()=>{
    mongoose.connect(process.env.DATABASE, {useUnifiedTopology: true,useNewUrlParser: true})
    .then(()=>{
        console.log('connect to database from port ', port);
    }).catch(e=>{
        console.log('error');
    })
})
