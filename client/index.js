document.addEventListener('DOMContentLoaded', function () {
    // fetch('http://localhost:5000/getAll')
    //.then(response => response.json())
    //.then(data => loadHTMLTable(data['data']));

    loadHtmlTables([]);

});

function loadHTMLTables(data) {
    const schoolTable = document.querySelector('#school-table', '#school-body');

    if (data.length === 0) {
        schoolTable.innerHTML = "<tr><td class = 'no-data'  colspan = '2'>No Data</td></tr>"
    }
}