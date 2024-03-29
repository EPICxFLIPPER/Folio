import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from "./components/frontPage/frontPage"
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
      <Route path="/" element={<FrontPage/>}/>
      <Route path="classView" element={<ClassView/>} />
      <Route path="studentinfo/:id" element={<StudentInfo/>} />
    </Routes>
  </Router>
    
  // //   <StudentInfo />
  //   <ClassView/>
  //   // <FrontPage/>
  );
};

export default App;
