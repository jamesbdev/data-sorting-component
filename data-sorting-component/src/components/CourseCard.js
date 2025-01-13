import React from "react";


//course content should be dynamic
// style course card
// add colour 

const CourseCard = (props) => {
    return(
        <div className="course-card space-x-2.5">
            <div className="square-container">
             {/* contains coloured square  */}
            </div>
            <div className="text-container">
                <div className="flex justify-between">
                    <h3>{ props.title }</h3>
                   
                  
                </div>
             
                <p>{ props.description }</p>
                <p>{ props.status }</p>
               
            </div>
         
        </div>
    )
}

export default CourseCard;