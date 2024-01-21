import React from "react";
import "./classView.css";

const classView = () => {
 return (
  <div className>
       {/* start of students */}
       <div className="students">
        {/* start of row 1 */}
        <div className="row">
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
        </div>
         {/* start of row 2 */}
         <div className="row">
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         </div>
          {/* start of row 3 */}
        <div className="row">
        <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
        </div>
        {/* start of row 4 */}
        <div className="row">
        <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
        </div>
          {/* start of row 5 */}
        <div className="row">
        <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
         <div className="studentBtn"><button>name</button></div>
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