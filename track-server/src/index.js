require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = ''//Paste Uri Here
if (!mongoUri) {
    throw new Error(
        `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
    );
}

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
   console.log('Connected to mongodb');
});

mongoose.connection.on('error', (err) => {
    console.log("Error connecting to mongoDB" + err);
});

app.get('/', requireAuth, (req, res) => {
    res.send('Your Email: ' + req.user.email);
});

app.listen(3000, () => {
   console.log('Listening on port 3000')
});