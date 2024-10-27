const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const authRoutes = require('./routes/auth'); 
const app = express(); 
const credentialSchema = require('./schema/Credential'); 
const { connectToDb, getDb } = require('./db'); // Import your db module

app.use(cors()); 
app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost:27017/ChainDrive'); 

app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 2730; 

let db

connectToDb((err)=>{
    app.listen(PORT, ()=>{
        console.log('running at PORT', PORT)
    })
    if(!err){
        db = getDb()
    }
})

app.get('/', (req, res) => {
    res.send("Welcome to server")
})

// app.get('/userdata', async (req, res) => {
//     let items = []
//     console.log(db)
//     db.collection('credentials')
//     .forEach(item =>{
//         items.push(item)
//     })
//     .then(() => {
//         console.log("printed all user credentials")
//         res.json(items);
//     })
// })

app.get('/userdata', async (req, res) => {
    try {
        const users = await credential.find(); // Fetch all user credentials
        console.log("Printed all user credentials");
        res.json(users); // Send the fetched users as JSON response
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});