import React from "react";


//course content should be dynamic
// style course card
// add colour 

const CourseCard = (props) => {
    const statusClasses = {
        "completed": "text-green-500",
        "in-progress": "text-yellow-500",
        "not-started": "text-gray-500"
    }
    return(
        <div className={`${props.layout === "grid" ? "flex-col": null } course-card space-x-2.5`}>
            <div className="square-container">
             {/* contains coloured square  */}
            </div>
               <h3>{ props.title }</h3>
                <p>{ props.description }</p>
                <p className={`status ${statusClasses[props.status.replace(" ", "-")]}`}>{ props.status }</p>
               
          
         
        </div>
    )
}

export default CourseCard;