require('dotenv').config()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const SALT_I = 10

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    name:{
        type:String,
        required:true,
        maxlength:100
    },
    lastname:{
        type:String,
        required:true,
        maxlength:100
    },
    cart:{
        type:Array,
        default:[]
    },
    history:{
        type:Array,
        default:[]
    },
    role:{
        type:Number,
        default:0 
    },
    token:{
        type:String
    }

})

userSchema.pre('save',function(next){

    if(this.isModified('password')){
        bcrypt.genSalt(SALT_I,(err,salt)=>{
            if(err){
                return next(err)
            }else{
                bcrypt.hash(this.password,salt,(err,hash)=>{
                    if(err){
                        return next(err)
                    }else{
                        this.password = hash
                        next()
                    }
                })
            }
        })
    }else{
        next()
    }

    
})

userSchema.methods.comparePassword = function(candidatePassword,cb){

    bcrypt.compare(candidatePassword,this.password,(err,isMatch)=>{
      
        if(err) return cb(err)
        cb(null,isMatch)
    })
}

userSchema.methods.generateToken = function(cb){
    var token = jwt.sign(this._id.toHexString(),process.env.SECRET)

    this.token = token

    this.save((err,user)=>{
        if(err) return cb(err);
        cb(null,this)
    })
}

userSchema.statics.findByToken = function(token,cb){
    
    var user = this


    jwt.verify(token,process.env.SECRET,function(err,decode){

        
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err)
            console.log("******************",user)
            cb(null,user)
        })
    })
} 

const User = mongoose.model('User',userSchema)

module.exports = { User }