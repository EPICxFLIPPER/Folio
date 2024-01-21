document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5001/getStudent')
    .then(response => response.json())
    .then(data => loadStudentHTMLTable(data['data']));

    fetch('http://localhost:5001/getClass')
    .then(response => response.json())
    .then(data => loadClassHTMLTable(data['data']));

    fetch('http://localhost:5001/getTeacher')
    .then(response => response.json())
    .then(data => loadTeacherHTMLTable(data['data']));

    fetch('http://localhost:5001/getSchool')
    .then(response => response.json())
    .then(data => loadSchoolHTMLTable(data['data']));
});


function loadStudentHTMLTable(data) {
    const studentTable = document.querySelector('#student-table #student-body');

    if (data.length === 0) {
        studentTable.innerHTML = "<tr><td class='no-data' colspan='7'>No Data</td></tr>"
    } else {
        let tableHtml = ""; 
        data.forEach(function ({AcademicPerformance, ClassId, Name, StrongSubject, StudentId, WeakestSubject, absent}) {
            tableHtml += "<tr>";
            tableHtml += `<td>${StudentId}</td>`;
            tableHtml += `<td>${Name}</td>`;
            tableHtml += `<td>${AcademicPerformance}</td>`;
            tableHtml += `<td>${WeakestSubject}</td>`;
            tableHtml += `<td>${StrongSubject}</td>`;
            tableHtml += `<td>${absent}</td>`;
            tableHtml += `<td>${ClassId}</td>`;
            tableHtml += `<td><button class="delete-row-btn" data-id=${StudentId}>Delete</td>`;
            tableHtml += `<td><button class="edit-row-btn" data-id=${StudentId}>Edit</td>`;
            tableHtml += "</tr>";
        });
        studentTable.innerHTML = tableHtml;
    }
    
}

function loadTeacherHTMLTable(data) {
    const teacherTable = document.querySelector('#teacher-table #teacher-body');
    console.log(data);

    if (data.length === 0) {
        teacherTable.innerHTML = "<tr><td class='no-data' colspan='3'>No Data</td></tr>"
    } else {
        let tableHtml = ""; 
        data.forEach(function ({Name, SchoolId, TeacherId}) {
            tableHtml += "<tr>";
            tableHtml += `<td>${Name}</td>`;
            tableHtml += `<td>${SchoolId}</td>`;
            tableHtml += `<td>${TeacherId}</td>`;
            tableHtml += `<td><button class="delete-row-btn" data-id=${TeacherId}>Delete</td>`;
            tableHtml += `<td><button class="edit-row-btn" data-id=${TeacherId}>Edit</td>`;
            tableHtml += "</tr>";
        });
        teacherTable.innerHTML = tableHtml;
    }
}

function loadSchoolHTMLTable(data) {
    const schoolTable = document.querySelector('#school-table #school-body');

    if (data.length === 0) {
        schoolTable.innerHTML = "<tr><td class='no-data' colspan='2'>No Data</td></tr>"
    }   
}

function loadClassHTMLTable(data) {
    const classTable = document.querySelector('#class-table #class-body');

    if (data.length === 0) {
        classTable.innerHTML = "<tr><td class='no-data' colspan='2'>No Data</td></tr>"
    } else {

    }
}

const addSchoolBtn = document.querySelector('#add-school-btn');
const addTeacherBtn = document.querySelector('#add-teacher-btn'); 
const addClassBtn = document.querySelector('#add-class-btn'); 
const addStudentBtn = document.querySelector('#add-student-btn'); 

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
    const teacherNameInput = document.querySelector('#teacher-name-input');  //TODO: WIE
    const teacherSchoolIdInput = document.querySelector('#teacher-schoolId-input') //TODO: WIE
    const name = teacherNameInput.value;
    const schoolId = teacherSchoolIdInput.value;
    teacherNameInput.value = "";
    teacherSchoolIdInput.value = "";
    

    fetch('http://localhost:5001/insert/teacher', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name, schoolId : schoolId})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}

addClassBtn.onclick = function () {
    const classteacherIdInput = document.querySelector('#class-teacherId-input');
    const teacherId = classteacherIdInput.value;
    classteacherIdInput.value = "";
    

    fetch('http://localhost:5001/insert/class', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ teacherId : teacherId})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}


addStudentBtn.onclick = function () {
    const studentName = document.querySelector('#student-name-input');
    const studentClassId = document.querySelector('#student-classId-input');
    const name = studentName.value;
    const classId = studentClassId.value;
    studentName.value = "";
    studentClassId.value = "";
    

    fetch('http://localhost:5001/insert/student', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name, classId : classId})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}


























function insertRowIntoTable(data) {
    console.log(data);
}