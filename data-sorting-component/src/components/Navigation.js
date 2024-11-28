import React from "react";

//navigation to toggle list format or grid format
//default is grid 

const Navigation = () => {
  return (
    <>
        {/* layout icons */}
        <nav className="layout-icons">
        {/* - add icons  */}
        <ul>
          <li>Grid</li>
          <li>List</li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation