const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const credential = require('../schema/Credential'); 

router.get('/login', async(req,res) => {
    res.send("login API")
})

router.post('/login', async (req, res) => { 
    const { username, password } = req.body; 
    console.log(username, password)
    try { 
        const user = await credential.findOne({ username }); 
        if (!user) { 
            console.log("hihi")
            return res.status(400).json({ message: 'Invalid username or password!!' }); 
        } 
    res.json(user)
    // const isMatch = await bcrypt.compare(password, user.password); 
    // if (!isMatch) { 
    //     console.log("hihi2")
    //     return res.status(400).json({ message: 'Invalid username or password!!' }); 
    // } 
    // const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' }); 
    // res.json({ token }); 
    } 
    catch (error) { 
        console.error(error); 
        res.status(500).send('Server Error'); 
    } 
}); 

module.exports = router;