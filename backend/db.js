const mongoose = require('mongoose');

// Connection URI
const uri = "mongodb://localhost:27017/ChainDrive"; // Use your local or cloud URI

let db;

const connectToDb = async (cb) => {
    try {
        db = await mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("Database connected successfully");
        cb(); // Callback after successful connection
    } catch (err) {
        console.log("Database connection error:", err);
        cb(err); // Pass the error to the callback
    }
};

// Function to get the database connection
const getDb = () => {
    if (!db) {
        throw new Error("Database not initialized. Call connectToDb first.");
    }
    return db;
};

module.exports = {
    connectToDb,
    getDb
};