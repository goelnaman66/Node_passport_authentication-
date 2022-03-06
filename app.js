const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();


//DbConfig
const db= require('./config/keys').MongoURI;

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDb Connected'))
.catch(err => console.log(err));




//EJS
app.use(expresslayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));