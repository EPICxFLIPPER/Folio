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
        data.forEach(function ({AcademicPerformance, ClassId, Name, StrongestSubject, StudentId, WeakestSubject, absent}) {
            tableHtml += "<tr>";
            tableHtml += `<td>${StudentId}</td>`;
            tableHtml += `<td>${Name}</td>`;
            tableHtml += `<td>${AcademicPerformance}</td>`;
            tableHtml += `<td>${WeakestSubject}</td>`;
            tableHtml += `<td>${StrongestSubject}</td>`;
            tableHtml += `<td>${absent}</td>`;
            tableHtml += `<td>${ClassId}</td>`;
            tableHtml += `<td><button class="delete-row-btn" data-id=${StudentId}>Delete</td>`;
            tableHtml += `<td><button class="edit-student-row-btn" data-id=${StudentId}>Edit</td>`;
            tableHtml += "</tr>";
        });
        studentTable.innerHTML = tableHtml;
    }
    
}

function loadTeacherHTMLTable(data) {
    const teacherTable = document.querySelector('#teacher-table #teacher-body');

    if (data.length === 0) {
        teacherTable.innerHTML = "<tr><td class='no-data' colspan='3'>No Data</td></tr>"
    } else {
        let tableHtml = ""; 
        data.forEach(function ({Name, SchoolId, TeacherId}) {
            tableHtml += "<tr>";
            tableHtml += `<td>${TeacherId}</td>`;
            tableHtml += `<td>${Name}</td>`;
            tableHtml += `<td>${SchoolId}</td>`;
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
    } else {
        let tableHtml = ""; 
        data.forEach(function ({SchoolId, Name}) {
            tableHtml += "<tr>";
            tableHtml += `<td>${SchoolId}</td>`;
            tableHtml += `<td>${Name}</td>`;
            tableHtml += `<td><button class="delete-row-btn" data-id=${SchoolId}>Delete</td>`;
            tableHtml += `<td><button class="edit-row-btn" data-id=${SchoolId}>Edit</td>`;
            tableHtml += "</tr>";
        });
        schoolTable.innerHTML = tableHtml;
    }
}

function loadClassHTMLTable(data) {
    const classTable = document.querySelector('#class-table #class-body');

    if (data.length === 0) {
        classTable.innerHTML = "<tr><td class='no-data' colspan='2'>No Data</td></tr>"
    } else {
        let tableHtml = ""; 
        data.forEach(function ({ClassId, TeacherId}) {
            tableHtml += "<tr>";
            tableHtml += `<td>${ClassId}</td>`;
            tableHtml += `<td>${TeacherId}</td>`;
            tableHtml += `<td><button class="delete-row-btn" data-id=${ClassId}>Delete</td>`;
            tableHtml += `<td><button class="edit-row-btn" data-id=${ClassId}>Edit</td>`;
            tableHtml += "</tr>";
        });
        classTable.innerHTML = tableHtml;
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
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
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
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
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
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
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

document.querySelector('#school-table #school-body').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteSchoolRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleSchoolEditRow(event.target.dataset.id);
    }
});

document.querySelector('#teacher-table #teacher-body').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteTeacherRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleTeacherEditRow(event.target.dataset.id);
    }
});

document.querySelector('#class-table #class-body').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteClassRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleClassEditRow(event.target.dataset.id);
    }
});

document.querySelector('#student-table #student-body').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteStudentRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-student-row-btn") {
        handleStudentEditRow(event.target.dataset.id);
    }
});

function deleteSchoolRowById(id) {
    fetch('http://localhost:5001/delete/school/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

function deleteTeacherRowById(id) {
    fetch('http://localhost:5001/delete/teacher/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

function deleteClassRowById(id) {
    fetch('http://localhost:5001/delete/class/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

function deleteStudentRowById(id) {
    fetch('http://localhost:5001/delete/student/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}


function handleStudentEditRow(id) {
    const updateSection = document.querySelector('#update-student-row');
    updateSection.hidden = false;
    document.querySelector('#student-performance-input').dataset.id = id;
}


const updateBtn = document.querySelector('#submit-edit');


updateBtn.onclick = function() {
    // const updateNameInput = document.querySelector('#student-name-input');
    const updateAcademicPreformaceInput = document.querySelector('#student-performance-input');
    const updateWeakestSubjectInput = document.querySelector('#student-weak-input');
    const updateStrongestSubjectInput = document.querySelector('#student-strong-input');
    const updateAbsenttSubjectInput = document.querySelector('#student-absent-input');
   

    fetch('http://localhost:5001/update/student', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: updateAcademicPreformaceInput.dataset.id,
            // name: updateNameInput.value
            academicPerformance : updateAcademicPreformaceInput.value,
            weakestSubject : updateWeakestSubjectInput.value,
            strongestSubject : updateStrongestSubjectInput.value,
            absent : updateAbsenttSubjectInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    })
}





















function insertRowIntoTable(data) {
    console.log(data);
}