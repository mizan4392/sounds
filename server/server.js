require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cookiParser = require('cookie-parser')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect(process.env.DATABASE,{useNewUrlParser:true})
const app = express()

// moddlewers
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cookiParser())


//Models
const {User} = require('./models/user')


//======================
//          USERS
//======================

app.post('/api/users/register',(req,res)=>{
    // const user = n
})


const port = process.env.PORT || 3002

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})