import React from "react";


//course content should be dynamic
// style course card
// add colour 

const CourseCard = (props) => {
    return(
        <div className="course-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default CourseCard;