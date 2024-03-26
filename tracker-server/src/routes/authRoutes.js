const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = new User({email, password});
        await user.save();
        const token = jwt.sign({userId: user._id}, 'daring');
        res.send({token})
    }catch (err){
        if (err.name === 'MongoError' && err.code === 11000) {
            return res.status(409).json({ err: "Email already registered!" });
        }else {
            return res.status(422).send(err.message);
        }
    }
});

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(422).json({err: 'Email and Password is Required!'});
    }

    const user = await User.findOne({email});

    if(!user){
        return res.status(422).json({err: 'Invalid Password or Email'});
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'daring');
        res.send({token});
    }catch(err){
        return res.status(422).json({err: 'Invalid Password or Email'});
    }

});

module.exports = router;