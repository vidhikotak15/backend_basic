// require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("hello world, hi")
})

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