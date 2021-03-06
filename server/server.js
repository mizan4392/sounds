require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cookiParser = require('cookie-parser')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
const app = express()

// moddlewers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookiParser())


//Models
const { User } = require('./models/user')
const { Brand } = require('./models/brand')
const { Wood } = require('./models/woods')
const { Product } = require('./models/product')
//middlewares
const { auth } = require('./middleware/auth')
const { admin } = require('./middleware/admin')


//======================
//          USERS
//======================

app.get('/api/users/auth', auth, (req, res) => {

    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })

})

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, doc) => {
        if (err) {
            return res.json({ success: false, err })
        } else {
            res.status(200).json({
                success: true
            })
        }
    })
})

app.post('/api/users/login', (req, res) => {

    //find email
    User.findOne({ 'email': req.body.email }, (err, user) => {
        if (!user) return res.json({ loginSuccess: false, message: "email not found" })
        //check password
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({ loginSuccess: false, message: 'wrong Password' })

            //generate token
            user.generateToken((err, user) => {
                if (err) return res.status(400).json(err)

                res.cookie('w_auth', user.token).status(200).json({ loginSuccess: true })
            })
        })
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        { _id: req.user._id },
        { token: '' },
        (err, doc) => {
            if (err) return res.json({ success: false, err })
            return res.status(200).send({
                success: true
            })
        }
    )
})


//======================
//          BRAND
//======================

app.post('/api/product/brand', auth, admin, (req, res) => {
    const brand = new Brand(req.body)

    brand.save((err, doc) => {
        if (err) res.json({ success: false, err });

        res.status(200).json({
            success: true,
            brand: doc
        })
    })
})

app.get('/api/product/brands', (req, res) => {

    Brand.find({}, (err, brands) => {
        if (err) return res.status(400).send({ err })

        res.status(200).send(brands)
    })
})

//======================
//          WOODS
//======================


app.post('/api/product/wood', auth, admin, (req, res) => {


    const wood = new Wood(req.body);


    wood.save((err, doc) => {
        if (err) res.json({ success: false, err });

        res.status(200).json({
            success: true,
            wood: doc
        })
    })
})

app.get('/api/product/woods', (req, res) => {
    Wood.find({}, (err, woods) => {
        if (err) return res.status(400).send({ err })
        res.status(200).send(woods)
    })
})


//======================
//          PRODUCTS
//======================

//BY ARRIVAL

app.post('/api/product/shop', (req, res) => {

    const order = req.body.order ? req.body.order : 'desc'
    const sortBy = req.body.sortBy ? req.body.sortBy : '_id'
    let limit = req.body.limit ? parseInt(req.body.limit) : 20;
    let skip = parseInt(req.body.skip)
    let findArgs = {}
    for (let key in req.body.filter) {
        if (req.body.filter[key].length > 0) {
            if (key === "price") {

                findArgs[key] = {
                    $gte: req.body.filter[key][0],
                    $lte: req.body.filter[key][1]
                }

            } else {
                findArgs[key] = req.body.filter[key]

            }
        }
    }

    Product
        .find(findArgs)
        .populate('brand')
        .populate('wood')
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err,articles)=>{

            if(err) return res.status(400).send(err)

            res.status(200).json({
                size:articles.length,
                articles
            })
        })
})


app.get('/api/product/articles', (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;


    Product
        .find()
        .populate('brand')
        .populate('wood')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, articles) => {
            if (err) return res.status(400).send(err)
            res.send(articles)
        })
})


//BY SELL

app.post('/api/product/article', auth, admin, (req, res) => {

    const product = new Product(req.body);

    product.save((err, doc) => {
       
        if (err) return res.json({ success: false, err })

        res.status(200).json({
            success: true,
            article: doc
        })
    })
})


app.get('/api/product/articles_by_id', (req, res) => {

    let type = req.query.type
    let items = req.query.id;

    if (type === "array") {
        let ids = req.query.id.split(',');

        items = ids.map(item => {
            return mongoose.Types.ObjectId(item)
        })

    }

    Product.
        find({ '_id': { $in: items } })
        .populate('brand')
        .populate('wood')
        .exec((err, docs) => {
            return res.status(200).send(docs)

        })
})



const port = process.env.PORT || 3002

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})