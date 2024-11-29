import React from "react";
import Image from 'next/image'

//navigation to toggle list format or grid format
//default is grid 

const Navigation = () => {
  return (
    <>
        {/* layout icons */}
        <nav className="layout-icons">
        {/* - add icons  */}
        <ul className="navigation-list">
          <li>
            <Image src="/grid_icon.png"
            width={25} height={25} alt="grid-icon"/>
            </li>
          <li><Image src="/list_icon.png" width={25} height={25} alt="list-icon"/></li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation