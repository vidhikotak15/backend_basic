// require('dotenv').config()

const express = require('express');
const Product = require('./model/product.model.js')
const app = express();

app.use(express.json());

const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Student')
    .then(() => console.log('connected'))
    .catch((error) => {
        console.log('failed, ', error);
    });

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("hello world, hi")
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//update a product

app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// delete a product

app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json({ mssg: "product deleted successfully" });
    } catch (error) {
        res.status(500).json({ mesage: json.message });
    }
});

app.post('/api/products', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body)
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

app.get('/twitter', (req, res) => {
    res.send("vidhi kotak")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please log in</h1>')
})

app.get('/jsontext', (req, res) => {
    res.json({ "mom": "venus" })
})

app.get('/api/jokes', (req, res) => {
    const jokes = [{
        id: 1,
        title: '1 joke'
    },
    {
        id: 2,
        title: '2 joke'
    }];
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`listening to http://localhost/${port}`);
})
// console.log("hello world");