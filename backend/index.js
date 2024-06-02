const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const dbConnection = require('./db/db');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

dbConnection().then(() => {
    app.on('error', (error) => {
        console.error("Error connecting to MongoDB: ", error);
        throw error;
    });

    app.listen(`${process.env.PORT}`, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    });

    app.get('/', (req, res) => {
        res.json({ message: "OK" });
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
    throw error;
});

