const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const userDB = require('../schema/User'); 

router.get('/login', async(req,res) => {
    res.send("login API")
})

router.post('/login', async (req, res) => { 
    const { username, password } = req.body; 
    console.log(username, password)
    try { 
        const user = await userDB.findOne({ username }); 
        if (!user) { 
            return res.status(400).json({ message: 'Invalid username or password!!' }); 
        } 
        const isMatch = await bcrypt.compare(password, user.password); 
        if (!isMatch) { 
            return res.status(400).json({ message: 'Invalid username or password!!' }); 
        } 
        res.json(user)
    // const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' }); 
    // res.json({ token }); 
    } 
    catch (error) { 
        console.error(error); 
        res.status(500).send('Server Error'); 
    } 
}); 

router.route('/signup')
    .post(async (req, res) => {
        let newuser = {}
        const { username, password } = req.body; 
        // initializing new user
        newuser.username = username
        try{
            //hashing the password inputted for security
            const hashedPassword = await bcrypt.hash(password, 10)
            newuser.password = hashedPassword
            console.log('user to add: ', newuser)
            const newUser = new userDB({
                username,
                password: hashedPassword
            });
    
            await newUser.save();            
            res.json({status: 'ok'})
        } catch{
            res.json({status: 'failed to signup'})
        }
    })

module.exports = router;