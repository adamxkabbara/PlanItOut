import React from 'react';

function ProjectSummary({project}) {
    return(
        <div className="project-summary card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Adam Kabbara</p>
                <p className="grey-text">12th December, 11:00am</p>
            </div> 
        </div>        
    )
}

export default ProjectSummary;