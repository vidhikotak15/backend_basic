// require('dotenv').config()

const express = require('express');
const app = express();

const { MongoClient } = require('mongodb')
// mongoose.connect('mongodb://localhost:27017')
//     .then(() => console.log('connected'))
//     .catch(() => {
//         console.log('failed');
//     });

async function main() {
    const client = new MongoClient('mongodb://127.0.0.1:27017/Student');
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db();
        const collection = db.collection('Student'); // Specify the collection name
        // Insert a single document
        const result = await collection.insertOne({
            name: 'John Doe',
            age: 21,
            grade: 'A'
        });
        // Log the inserted document ID
        console.log(`Inserted document ID: ${result.insertedId}`);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}
main().catch(console.error);

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