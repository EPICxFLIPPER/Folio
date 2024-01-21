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
app.post('/insert/school', (request, response) => {
    const { name } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewSchool(name);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

//Create
app.post('/insert/teacher', (request, response) => {
    const { name, schoolId } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewTeacher(name, schoolId);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

//Create
app.post('/insert/class', (request, response) => {
    const { teacherId } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewClass(teacherId);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

//Read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getData("SELECT * FROM Teacher;");

    result.then(data => response.json({data : data})).catch(err => console.log(err));
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