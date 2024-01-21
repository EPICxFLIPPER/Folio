import React from "react";
import "./frontPage.css" ;

const frontPage = () => {
 return (
  <div className>
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
      <button type="submit">
       <p className="logInText">Log in</p>
      </button>
      </form> 
     </div>
     {/* log in button */}
     <div className="logInButton"></div>
   </div>
   {/* end of center */}
  </div>
 )
}

export default frontPage;