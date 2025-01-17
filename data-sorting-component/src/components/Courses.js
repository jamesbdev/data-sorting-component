import React from "react";
import CourseCard from "./CourseCard";
import data from "../../public/data.json"

//Displays a list of courses
const courses = data.courses;

console.log("courses: ", courses);


const Courses = (props) => {
    const courseKeys = Object.keys(courses);
    return (
        //courses main container
        <div className={`${props.layout === "list" ? "flex flex-col" : "w-1/5 grid grid-cols-4" } w-4 flex-wrap justify-center gap-x-7 courses-container`}>
            {courseKeys.map((key, index) => (
                //individual course card
                <CourseCard 
                    key= {index}
                    title={key}
                    layout={props.layout}
                    description={courses[key].description}
                    status={courses[key].status}
                    color={courses[key].colour}
                    className={`${props.layout === "list" ? "flex" : "" }`}
                />
            ))}
        </div>
    )
}

export default Courses