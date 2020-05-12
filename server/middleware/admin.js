let admin = (req,res,next) =>{
    if(req.user.role === 1){
        return res.send('you are Not Allowed')
    }
    next()
}

module.exports = { admin}