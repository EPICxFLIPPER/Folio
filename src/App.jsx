import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentInfo from "./components/studentInfo";
import ClassView from "./components/classView"; // Capitalized the component name

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ClassView />} />
    //     <Route path="/studentInfo/:StudentId" component={StudentInfo} />
    //   </Routes>
    // </Router>

  <Router> 
    <Routes>
      <Route path="/" element={<ClassView/>}/>
      <Route path="studentinfo" element={<StudentInfo/>} />
    </Routes>
  </Router>
    
  // //   <StudentInfo />
  //   <ClassView/>
  //   // <FrontPage/>
  );
};

export default App;
