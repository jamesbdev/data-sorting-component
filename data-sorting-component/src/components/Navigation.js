
import React, { useState } from "react";
import Image from 'next/image'

//navigation to toggle list format or grid format
//default is grid 

const Navigation = ({ layout, onLayoutChange }) => {
  //declare state for the layout

  function displayGrid() {
    console.log("grid");
    onLayoutChange("grid");
  }

  function displayList() {
    //display list layout 
    //change CSS classes to show list
    console.log("List")
    onLayoutChange("list")
  }
  return (
    <>
        {/* layout icons */}
        <nav className="layout-icons">
        {/* - add icons  */}
        <ul className="navigation-list">
          <li onClick={displayGrid}>
            <Image src="/grid_icon.png"
            width={25} height={25} alt="grid-icon"/>
          </li>
          <li onClick={displayList}>
            <Image src="/list_icon.png" width={25} height={25} alt="list-icon"/>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation