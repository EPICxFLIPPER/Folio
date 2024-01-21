import React, { useEffect, useState } from "react";
import axios from "axios";
import "./classView.css";
import {useNavigate} from 'react-router-dom';

const ClassView = () => {
const[names, setNames] = useState([]); 
const[student, setStudent] = useState("Steve");
const navigate = useNavigate();

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

const handleButtonClick = (id) => {
  console.log(`Button clicked for ${id}`);
  navigate(`studentinfo/${id}`);
}
 return (
  <div className>
       {/* start of students */}
       <div className="students">
        {/* start of row 1 */}
        <div className="row">
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[0].StudentId)}> {studentNames[0]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[1].StudentId)}> {studentNames[1]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[2].StudentId)}> {studentNames[2]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[3].StudentId)}> {studentNames[3]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[4].StudentId)}> {studentNames[4]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[5].StudentId)}> {studentNames[5]}</button></div>
        </div>
         {/* start of row 2 */}
         <div className="row">
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[6].StudentId)}> {studentNames[6]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[7].StudentId)}> {studentNames[7]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[8].StudentId)}> {studentNames[8]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[9].StudentId)}> {studentNames[9]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[10].StudentId)}> {studentNames[10]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[11].StudentId)}> {studentNames[11]}</button></div>
         </div>
          {/* start of row 3 */}
        <div className="row">
        <div className="studentBtn"><button onClick={() => handleButtonClick(names[12].StudentId)}> {studentNames[12]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[13].StudentId)}> {studentNames[13]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[14].StudentId)}> {studentNames[14]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[15].StudentId)}> {studentNames[15]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[16].StudentId)}> {studentNames[16]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[17].StudentId)}> {studentNames[17]}</button></div>
        </div>
        {/* start of row 4 */}
        <div className="row">
        <div className="studentBtn"><button onClick={() => handleButtonClick(names[18].StudentId)}> {studentNames[18]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[19].StudentId)}> {studentNames[19]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[20].StudentId)}> {studentNames[20]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[21].StudentId)}> {studentNames[21]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[22].StudentId)}> {studentNames[22]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[23].StudentId)}> {studentNames[23]}</button></div>
        </div>
          {/* start of row 5 */}
        <div className="row">
        <div className="studentBtn"><button onClick={() => handleButtonClick(names[24].StudentId)}> {studentNames[24]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[25].StudentId)}> {studentNames[25]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[26].StudentId)}> {studentNames[26]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[27].StudentId)}> {studentNames[27]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[28].StudentId)}> {studentNames[28]}</button></div>
         <div className="studentBtn"><button onClick={() => handleButtonClick(names[29].StudentId)}> {studentNames[29]}</button></div>
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