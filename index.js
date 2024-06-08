require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/twitter', (req, res) => {
    res.send("vidhi kotak")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please log in</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${port}`);
})
// console.log("hello world");