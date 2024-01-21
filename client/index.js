document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5001/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTables(data['data']));
});

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


const addBtn = document.querySelector('#add-school-btn'); //TODO add name of button

addBtn.onclick = function () {
    const schoolNameInput = document.querySelector('#school-name-input'); //TODO 
    const name = schoolNameInput.value;
    schoolNameInput.value = "";
    //console.log(name);

    fetch('http://localhost:5001/insert', {
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


