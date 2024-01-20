const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Create
app.post('/insert', (request,response) => {
    //Stub
});

//Read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
});

//Update
app.patch('/update', (request, response) => {
    //Stub
});

//Delete
app.delete('/delete/:id', (request, response) => {
    //Stub
});

app.listen(process.env.PORT, () => console.log('app is running'));