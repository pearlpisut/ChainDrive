const mongoose = require('mongoose'); 

const credential = new mongoose.Schema({ 
    username: { 
        type: String, 
        required: true, 
        unique: true, 
    },  

    password: { 
        type: String, 
        required: true, 
    }, 
}, {collection: 'credentials'}); 

module.exports = mongoose.model('UserCredentials', credential);