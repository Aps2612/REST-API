require('dotenv').config()


const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/subscribers",{ useNewUrlParser : true });

const db =mongoose.connection
db.on('error',(error) => console.log(error.message));
db.once('open',()=> console.log("connected to database"));   

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers',subscribersRouter);

app.listen(5000,()=>{ 
    console.log("server started")
});