import React from "react";
import CourseCard from "./CourseCard";
import data from "../../public/data.json"

//Displays a list of courses
const courses = data.courses;

console.log("courses: ", courses);


const Courses = () => {
    const courseKeys = Object.keys(courses);
    return (
        <div className="courses-container">
            {courseKeys.map((key, index) => (
                <CourseCard 
                key= {index}
                title={key}
                description={courses[key].description}
                />
            ))}
        </div>
    )
}

export default Courses