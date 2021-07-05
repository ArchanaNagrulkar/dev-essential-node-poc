const express = require('express');
const app = express();
const routes = require('./routes/api/router');
const db = require('./app/database/db');
const mongoose =require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4000;

// using body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// database connection
mongoose.connect(db.Url,({useNewUrlParser:true,useUnifiedTopology:true}));

// routes
app.use('/',routes);

app.listen(PORT,()=>{
    console.log(`Server is listening at Port ${PORT}`);
})

