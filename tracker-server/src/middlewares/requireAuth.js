const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).send({error: 'You must be logged in!'})
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'daring', async (err, payload) => {
        if(err){
            return res.status(401).send({error: 'You must be logged in!'});
        }
        const {userId} = payload;
        req.user = await User.findById(userId);
        next();
    });
};