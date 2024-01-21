import React from "react";
import "./classView.css";

const classView = () => {
const names = ["1", "2", "3", "4", "5", "6",
"7", "8", "3", "4", "5", "6",
"1", "2", "3", "4", "5", "6",
"1", "2", "3", "4", "5", "6",
"1", "2", "3", "4", "5", "6",];

 return (
  <div className>
       {/* start of students */}
       <div className="students">
        {/* start of row 1 */}
        <div className="row">
         <div className="studentBtn"><button> {names[0]} </button></div>
         <div className="studentBtn"><button> {names[1]} </button></div>
         <div className="studentBtn"><button> {names[2]} </button></div>
         <div className="studentBtn"><button> {names[3]} </button></div>
         <div className="studentBtn"><button> {names[4]}</button></div>
         <div className="studentBtn"><button> {names[5]}</button></div>
        </div>
         {/* start of row 2 */}
         <div className="row">
         <div className="studentBtn"><button> {names[6]}</button></div>
         <div className="studentBtn"><button> {names[7]}</button></div>
         <div className="studentBtn"><button> {names[8]}</button></div>
         <div className="studentBtn"><button> {names[9]}</button></div>
         <div className="studentBtn"><button> {names[10]}</button></div>
         <div className="studentBtn"><button> {names[11]}</button></div>
         </div>
          {/* start of row 3 */}
        <div className="row">
        <div className="studentBtn"><button> {names[12]}</button></div>
         <div className="studentBtn"><button> {names[13]}</button></div>
         <div className="studentBtn"><button> {names[14]}</button></div>
         <div className="studentBtn"><button> {names[15]}</button></div>
         <div className="studentBtn"><button> {names[16]}</button></div>
         <div className="studentBtn"><button> {names[17]}</button></div>
        </div>
        {/* start of row 4 */}
        <div className="row">
        <div className="studentBtn"><button> {names[18]}</button></div>
         <div className="studentBtn"><button> {names[19]}</button></div>
         <div className="studentBtn"><button> {names[20]}</button></div>
         <div className="studentBtn"><button> {names[21]}</button></div>
         <div className="studentBtn"><button> {names[22]}</button></div>
         <div className="studentBtn"><button> {names[23]}</button></div>
        </div>
          {/* start of row 5 */}
        <div className="row">
        <div className="studentBtn"><button> {names[24]}</button></div>
         <div className="studentBtn"><button> {names[25]}</button></div>
         <div className="studentBtn"><button> {names[26]}</button></div>
         <div className="studentBtn"><button> {names[27]}</button></div>
         <div className="studentBtn"><button> {names[28]}</button></div>
         <div className="studentBtn"><button> {names[29]}</button></div>
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
      <input type="name" id="studentName" name="studentName" required></input>
      </div>
     <div className="addStudentBtn">
      <button>add student</button>
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
export default classView;