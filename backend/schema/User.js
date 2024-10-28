const mongoose = require('mongoose'); 

const userDB = new mongoose.Schema({ 
    username: { 
        type: String, 
        required: true, 
        unique: true, 
    },  

    password: { 
        type: String, 
        required: true, 
    }, 
}, {collection: 'Users'}); 

module.exports = mongoose.model('UserCredentials', userDB);