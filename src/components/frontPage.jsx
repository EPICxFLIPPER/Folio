import React from "react";
import "./frontPage.css" ;

const frontPage = () => {
 return (
  <div>
   {/* start of logo */}
   <div className="logo">
    <h1>hello world</h1>
   </div>
   {/* end of logo */}
   {/* start of center */}
   <div className="center">
    {/* front page img */}
    <div className="frontPageImg">
     {/* front page img */}
     <img src="" alt="" className="randomImg" />
    {/* log in box */}
     <div className="logInBox">
     </div>
     {/* log in button */}
     <div className="logInButton"></div>
    </div>

   </div>
   {/* end of center */}
  </div>
 )
}

export default frontPage;