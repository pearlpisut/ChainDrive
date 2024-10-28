const mongoose = require('mongoose');

// Connection URI
const uri = "mongodb://localhost:27017/ChainDrive"; // Use your local or cloud URI

const connectToDb = async (cb) => {
    try {
        await mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("Database connected successfully");
        cb(); // Callback after successful connection
    } catch (err) {
        console.log("Database connection error:", err);
        cb(err);
    }
};

module.exports = {
    connectToDb
};