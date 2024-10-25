
const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const { MongoClient } = require('mongodb');


app.use(express.json());
app.use(cors());


// connect to the database

const username = encodeURIComponent("mnkrv");
const password = encodeURIComponent("Minis!@33102060");

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.2wmyy.mongodb.net/respect`)


//APIs
app.get('/', (req, res) => {
    res.send("Express API is running");
});

const Product = mongoose.model('Product', {
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    bestseller: {
        type: Boolean,
        required: true,
    },
})

app.post('/addProduct', async (req, res) => {
   const product = new Product({
         id: req.body.id,
         name: req.body.name,
         description: req.body.description,
         price: req.body.price,
         image: req.body.image,
         category: req.body.category,
         subCategory: req.body.subCategory,
         bestseller: req.body.bestseller,
   });
   console.log(product);
   await product.save();
   console.log("Product saved");
   res.json({
        success: true,
        name: req.body.name,
   })
});

// Schema creating for User Modal
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

//creating endPoint for registering user
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({email: req.body.email});
    if (check) {
        return res.status(400).json({success: false, error: "User already exists"});
    }
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const data = {
        user:{
            id: user.id,
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({
        success: true,
        token
    })
});

//Creating endpoint for User Login 
app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id: user.id,
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({
                success: true,
                token
            })
        }
        else {
            res.json({success: false, error: "Wrong Password"});
        }
    }
    else {
        res.json({success: false, error: "User not found"});
    }
})

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server is running on port ${port}`);
    }else {
        console.log("Error:", err);
    }
});