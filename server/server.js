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
    const user = new User(req.body)

    user.save((err,doc)=>{
        if(err){
            return res.json({success:false,err})
        }else{
            res.status(200).json({
                success:true,
                userData:doc
            })
        }
    })
})


const port = process.env.PORT || 3002

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})