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

app.post('/api/users/login',(req,res)=>{

    //find email
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false,message:"email not found"})
        //check password
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false,message:'wrong Password'})

            //generate token
            user.generateToken((err,user)=>{
                if(err) return res.status(400).json(err)

                res.cookie('w_auth',user.token).status(200).json({loginSuccess:true})
            })
        })
    })

    

    
})


const port = process.env.PORT || 3002

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})