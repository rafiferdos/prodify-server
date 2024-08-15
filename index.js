// Importing the required modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb');

// Constants
const port = process.env.PORT || 9000;
const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

// middlewares
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

// Connection URL

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vtlc5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // connect database
        const prodify_db = client.db("prodify");
        const product_collection = prodify_db.collection("products");
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);