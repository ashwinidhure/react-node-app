const express = require('express');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const teamRoutes = require('./routes/team');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // application/json

// CORS issue
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
})

app.use(userRoutes);
app.use(authRoutes);
app.use(teamRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Running on port', port));