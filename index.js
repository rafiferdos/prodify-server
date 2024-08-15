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
