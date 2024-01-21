import React from "react";
import "./frontPage.css";
import { Link } from 'react-router-dom';

const frontPage = () => {
 return (
  <div>
   {/* start of logo */}
   <div className="logo"> 
   </div>
   {/* end of logo */}
   {/* start of center */}
   <div className="center">
    {/* front page img */}
    <div className="frontPageImg">
     </div>
    {/* log in box */}
     <div className="logInBox">
    <form action="#" method="post"> 
    <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" required></input>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required></input>
      </form> 
      <Link className="toClassViewLink" to="classView">
      <div className="submitBtn">
      <button type="submit">
       <p className="logInText">Log in</p>
      </button>
      </div>
      </Link>
     </div>
     {/* log in button */}
     <div className="logInButton"></div>
   </div>
   {/* end of center */}
  </div>
 )
}

export default frontPage;