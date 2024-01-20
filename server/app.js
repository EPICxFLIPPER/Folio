const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));



//Create
app.post('/insert', (request,response) => {
    //Stub
});


//Read
app.get('/getAll', (request, response) => {
    //Stub
});


//Update
app.patch('/update', (request, response) => {
    //Stub
});

//Delete
app.delete('/delete/:id', (request, response) => {
    //Stub
});