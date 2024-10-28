const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const authRoutes = require('./routes/auth'); 
const app = express(); 
const { connectToDb } = require('./db'); // Import your db module

// import schema
const userDB = require('./schema/User'); 

app.use(cors()); 
app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost:27017/ChainDrive'); 

app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 2730; 

connectToDb((err)=>{
    app.listen(PORT, ()=>{
        console.log('running at PORT', PORT)
    })
    if(err){
        console.log('error connecting to DB')
    }
})

app.get('/', (req, res) => {
    res.send("Welcome to server")
})

app.get('/userdata', async (req, res) => {
    try {
        const users = await userDB.find(); // Fetch all user credentials
        console.log("Printed all user credentials");
        res.json(users); // Send the fetched users as JSON response
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});