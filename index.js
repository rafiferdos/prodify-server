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

        // routes
        app.get('/all_products', async (req, res) => {
            const products = await product_collection.find().toArray();
            res.json(products);
        });

        // Pagination and category filter route
        app.get('/products', async (req, res) => {
            try {
                const { page = 1, category } = req.query;
                const limit = 8;
                const skip = (page - 1) * limit;

                const query = {};
                // Add category filtering if category is provided
                if (category) {
                    query.category = category;
                }

                // Fetch total number of products with the applied filter (if any)
                const totalProducts = await product_collection.countDocuments(query);

                // Fetch products for the specific page, filtered by category if present
                const products = await product_collection.find(query)
                    .skip(skip)
                    .limit(limit)
                    .toArray();

                // Calculate total pages
                const totalPages = Math.ceil(totalProducts / limit);

                // Send the response with pagination data
                res.json({
                    products,
                    currentPage: parseInt(page),
                    totalPages,
                    totalProducts
                });
            } catch (err) {
                console.error("Error fetching filtered and paginated products:", err);
                res.status(500).json({ error: 'Server error' });
            }
        });

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
