document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5001/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTables(data['data']));
});

//Effects: Loads the tables: FRONT END, DELETE LATER
function loadHTMLTables(data) {
    const schoolTable = document.querySelector('#school-table #school-body');
    const teacherTable = document.querySelector('#teacher-table #teacher-body');
    const studentTable = document.querySelector('#student-table #student-body');
    const classTable = document.querySelector('#class-table #class-body');

    if (data.length === 0) {
        schoolTable.innerHTML = "<tr><td class='no-data' colspan='2'>No Data</td></tr>"
        teacherTable.innerHTML = "<tr><td class='no-data' colspan='3'>No Data</td></tr>"
        studentTable.innerHTML = "<tr><td class='no-data' colspan='7'>No Data</td></tr>"
        classTable.innerHTML = "<tr><td class='no-data' colspan='2'>No Data</td></tr>"
    }   
}


const addSchoolBtn = document.querySelector('#add-school-btn');
const addTeacherBtn = document.querySelector(''); //TODO: replace with name of button once add teacher button is created 
const addClassBtn = document.querySelector(''); //TODO: replace with name of button once add class button is created.
const addStudentBtn = document.querySelector(''); //TODO: replace with name of button once add student button is created.

addSchoolBtn.onclick = function () {
    const schoolNameInput = document.querySelector('#school-name-input');  
    const name = schoolNameInput.value;
    schoolNameInput.value = "";
    

    fetch('http://localhost:5001/insert/school', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}


addTeacherBtn.onclick = function () {
    const teacherNameInput = document.querySelector('');  //TODO: WIE
    const teacherSchoolIdInput = document.querySelector('') //TODO: WIE
    const name = teacherNameInput.value;
    const schoolId = teacherSchoolIdInput.vaule;
    teacherNameInput.value = "";
    teacherSchoolIdInput.value = "";
    

    fetch('http://localhost:5001/insert/school', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}

























function insertRowIntoTable(data) {
    console.log(data);
}