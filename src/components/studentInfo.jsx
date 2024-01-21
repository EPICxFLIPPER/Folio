import React from "react";
import "./studentInfo.css" ;

const studentInfo = () => {
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
        <div className="cross"><h1>X</h1></div>
        </div>
       
      </div>
      <div className="pp"></div>
      <div className="name"> <h1>Name</h1></div>
      <div className="attendance"> <h1>Present</h1></div>
      <div className="upperContainer">
      <div className="academicPerformanceBox">
      <div className="overallPerformance"><h1>Overall Performance</h1></div>
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
  <div className="comment">blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</div>
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
      <div className="tag1"> <h1>Tag 1</h1></div>
      </div>
      </div>
      <div className="second">
      <div className="strength2">
      <div className="tag2"> <h1>Tag 2</h1></div>
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
      <div className="tag3"> <h1>Tag 3</h1></div>
      </div>
      </div>
      <div className="fourth">
      <div className="weak2">
      <div className="tag4"> <h1>Tag 4</h1></div>
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

export default studentInfo;