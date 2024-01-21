import React, { useEffect, useState } from "react";
import axios from "axios";
import "./classView.css";

const ClassView = () => {
const[names, setNames] = useState([]); 
const[student, setStudent] = useState("Steve");

const addStudent = function () {

  fetch('http://localhost:5001/insert/student', {
      headers: {
          'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ name : student, classId : 18})
  })
    .then(response => setNames([...names , student]))
}

useEffect(() => {
  axios.get("http://localhost:5001/getStudent")
  .then((res) => {
    console.log(res);
    console.log(res.data);
    setNames(res.data.data);
  });
} ,[])


if (names.length < 2) {
  return null;
}

let studentNames = [names.length];
let counter = 0;

for (let i = 0; i < names.length; i++) {
  studentNames[i] = names[i].Name;
  counter++;
}

console.log(names.length);

for (let j = counter; j < 30; j++) {
  studentNames[j] = "";
}

 return (
  <div className>
       {/* start of students */}
       <div className="students">
        {/* start of row 1 */}
        <div className="row">
         <div className="studentBtn"><button> {studentNames[0]} </button></div>
         <div className="studentBtn"><button> {studentNames[1]} </button></div>
         <div className="studentBtn"><button> {studentNames[2]} </button></div>
         <div className="studentBtn"><button> {studentNames[3]} </button></div>
         <div className="studentBtn"><button> {studentNames[4]}</button></div>
         <div className="studentBtn"><button> {studentNames[5]}</button></div>
        </div>
         {/* start of row 2 */}
         <div className="row">
         <div className="studentBtn"><button> {studentNames[6]}</button></div>
         <div className="studentBtn"><button> {studentNames[7]}</button></div>
         <div className="studentBtn"><button> {studentNames[8]}</button></div>
         <div className="studentBtn"><button> {studentNames[9]}</button></div>
         <div className="studentBtn"><button> {studentNames[10]}</button></div>
         <div className="studentBtn"><button> {studentNames[11]}</button></div>
         </div>
          {/* start of row 3 */}
        <div className="row">
        <div className="studentBtn"><button> {studentNames[12]}</button></div>
         <div className="studentBtn"><button> {studentNames[13]}</button></div>
         <div className="studentBtn"><button> {studentNames[14]}</button></div>
         <div className="studentBtn"><button> {studentNames[15]}</button></div>
         <div className="studentBtn"><button> {studentNames[16]}</button></div>
         <div className="studentBtn"><button> {studentNames[17]}</button></div>
        </div>
        {/* start of row 4 */}
        <div className="row">
        <div className="studentBtn"><button> {studentNames[18]}</button></div>
         <div className="studentBtn"><button> {studentNames[19]}</button></div>
         <div className="studentBtn"><button> {studentNames[20]}</button></div>
         <div className="studentBtn"><button> {studentNames[21]}</button></div>
         <div className="studentBtn"><button> {studentNames[22]}</button></div>
         <div className="studentBtn"><button> {studentNames[23]}</button></div>
        </div>
          {/* start of row 5 */}
        <div className="row">
        <div className="studentBtn"><button> {studentNames[24]}</button></div>
         <div className="studentBtn"><button> {studentNames[25]}</button></div>
         <div className="studentBtn"><button> {studentNames[26]}</button></div>
         <div className="studentBtn"><button> {studentNames[27]}</button></div>
         <div className="studentBtn"><button> {studentNames[28]}</button></div>
         <div className="studentBtn"><button> {studentNames[29]}</button></div>
        </div>
       </div>
       {/* end of students */}

       {/* start of sidebar */}
   <div className="sideBar">
    {/* start of profile */}
    <div className="profile">
     {/* <div className="pfp"></div> */}
     <div><h2 className="name">name</h2>
     </div>
     <div className="addStudent">
      <div className="addStudentTextBox">
      <label for="studentName">Student name:</label>
      <input type="name" id="studentName" name="studentName" required value={student} onChange={(e)=> {setStudent(e.target.value)}}></input>
      </div>
     <div className="addStudentBtn">
      <button onClick={addStudent}>add student</button>
     </div>
     </div>
     </div>
     {/* start of class list */}
     <div className="classList">
      <div className="classBtn"><button>class</button></div>
      <div className="classBtn"><button>class</button></div>
      <div className="classBtn"><button>class</button></div>
      <div className="classBtn"><button>class</button></div>
     </div>
     {/* start of logout button */}
     <div className="logoutBtn">
     <button type="submit">
       <p className="logOutText">Log out</p>
      </button>
     </div>
    </div>
       {/* end of side bar */}
  </div>
 );
};
export default ClassView;