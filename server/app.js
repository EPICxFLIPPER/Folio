const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const { auth } = require('express-openid-connect');

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'V4Ip60ff775hiXI9WOkUI5W1KA83jeWo',
    issuerBaseURL: 'https://dev-3azt527x0nbmi8cn.us.auth0.com'
  };

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

//Create
app.post('/insert/student', (request, response) => {
    const { name, classId } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewStudent(name, classId);

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

//Read
app.get('/getStudent', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getData("SELECT * FROM Student;");

    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

//Read
app.get('/getStudent/:id', (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.getStudentById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

//Read
app.get('/getClass', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getData("SELECT * FROM Class;");

    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

//Read
app.get('/getTeacher', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getData("SELECT * FROM Teacher;");

    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

//Read
app.get('/getSchool', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getData("SELECT * FROM School;");

    result.then(data => response.json({data : data})).catch(err => console.log(err));
});



//Update
app.patch('/update/student', (request, response) => { //TODO CHeck that this is right
    const { id } = request.body;
    const { academicPerformance } = request.body;
    const { weakestSubject } = request.body;
    const { strongestSubject } = request.body;
    const { absent } = request.body;

    const db = dbService.getDbServiceInstance();

    const result = db.editStudentById(id,academicPerformance,weakestSubject,strongestSubject,absent);

    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

//Delete
app.delete('/delete/school/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteSchoolById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

//Delete
app.delete('/delete/teacher/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteTeacherById(id);

    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

//Delete
app.delete('/delete/class/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteClassById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

//Delete
app.delete('/delete/student/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteStudentById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.listen(process.env.PORT, () => console.log('app is running'));