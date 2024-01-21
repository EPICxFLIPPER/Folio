import React, { useEffect, useState } from "react";
import "./studentInfo.css" ;
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

 

const StudentInfo = () => {
  const navigate = useNavigate();

  let { id } = useParams();
  const [ student, setStudent] = useState(null);


const handleButtonClick = () => {
  navigate("/");
}

  useEffect(() => {
    const fetchData = async () => {
      try {;
        const response = await fetch(`http://localhost:5001/getStudent/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[id]);

  if (student === null) {
    return <p>Loading...</p>
  }

  console.log(student);

    const generateRandomPercentage = () => {
        return Math.floor(Math.random() * 51) + 50 + '%';
      };
    
      const grades = Array.from({ length: 7 }, generateRandomPercentage);

      const generateRandomDates = () => {
        const startDate = new Date('2023-09-01');
        const endDate = new Date('2024-01-20');
        const dateList = [];
    
        for (let i = 0; i < 7; i++) {
          const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
          const randomDate = new Date(randomTime);
          dateList.push(randomDate);
        }
    
        // Sort the dates in chronological order
        dateList.sort((a, b) => a - b);
    
        return dateList;
      };
    
      const formattedDates = generateRandomDates().map(date => {
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      });
    
    return (
        <div>
    
          {/* start of center */}
          <div className="center">
            {/* Red circle with white cross */}
            <div className="editButton">
        <div className="circle1">
        </div>
       
      </div>
      <div className="closeButton">
        <div className="circle">
        <div className="cross"><button onClick={() => handleButtonClick()}>X</button></div>
        </div>
       
      </div>
      <div className="pp"></div>
      <div className="name"> <h1>{student.success[0].Name}</h1></div>
      <div className="attendance"> <h1>Attendance: {student.success[0].absent}</h1></div>
      <div className="upperContainer">
      <div className="academicPerformanceBox">
      <div className="overallPerformance"><h1>Overall Performance Notes:</h1>
        <div>
          {student.success[0].AcademicPerformance}
        </div>
      </div>
      <div className="container">
      <div className="dates">
  <ul>
        {formattedDates.map((formattedDate, index) => (
          <li key={index}>{formattedDate}</li>
        ))}
      </ul>
  </div>
  <div className="gradesList">
  <ul>
        {grades.map((grade, index) => (
          <li key={index}>{grade}</li>
        ))}
      </ul>
  </div>
  <div className="container2">
  <div className="comment"></div>
  </div>
  <div className="container3">     </div>
</div>

   

    

      </div>
      </div>

      <div className="lowerContainer">
      <div className="container4">
      <div className="strengths"> <h1>Strengths</h1></div>
      <div className="first">
      <div className="strength1">
      <div className="tag1"> <h1>{student.success[0].StrongestSubject}</h1></div>
      </div>
      </div>
      <div className="add1">
      <div className="addStrength">
      <div className="plus1"> <h1>+</h1></div>
      </div>
      </div>
      </div>
      <div className="container5">
      <div className="weaknesses"> <h1>Weaknesses</h1></div>
      <div className="third">
      <div className="weak1">
      <div className="tag3"> <h1>{student.success[0].WeakestSubject}</h1></div>
      </div>
      </div>
      <div className="add2">
      <div className="addWeak">
      <div className="plus2"> <h1>+</h1></div>
      </div>
      </div>
      </div>
      </div>

          </div>
          {/* end of center */}
        </div>
      );
      
}

export default StudentInfo;