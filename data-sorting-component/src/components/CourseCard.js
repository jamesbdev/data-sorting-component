import React from "react";


//course content should be dynamic
// style course card
// add colour 

const CourseCard = (props) => {
    return(
        <div className="course-card space-x-2.5">
            <div className="text-container">
                <div className="flex justify-between">
                    <h3>{ props.title }</h3>
                    <span>{ props.status }</span>
                  
                </div>
             
                <p>{ props.description }</p>
               
            </div>
         
        </div>
    )
}

export default CourseCard;