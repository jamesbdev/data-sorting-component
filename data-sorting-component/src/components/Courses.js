import React from "react";
import CourseCard from "./CourseCard";
import data from "../../public/data.json"

//Displays a list of courses
const courses = data.courses;

console.log("courses: ", courses);


const Courses = (props) => {
    console.log(props.layout)
    const courseKeys = Object.keys(courses);
    return (
        //courses main container
        <div className={`flex ${props.layout === "list" ? "flex-col " : "w-1/5" } basis-1/5 flex-wrap justify-center gap-x-7 courses-container`}>
            {courseKeys.map((key, index) => (
                //individual course card
                <CourseCard 
                    key= {index}
                    title={key}
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