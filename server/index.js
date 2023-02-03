const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
require('./models/user');

mongoose.connect(keys.mongoURI);
const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5002;  
app.listen(PORT);