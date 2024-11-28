import React from "react";
import CourseCard from "./CourseCard";

//Displays a list of courses

const Courses = () => {
    return(
        <div>
        {/* - loop through courses
        - return individual course card component */}
        <CourseCard title="HTML" description="Lorem ipsum" />
        </div>
      
        
    )

}

export default Courses