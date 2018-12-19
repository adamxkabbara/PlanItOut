import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias ipsa id quae deserunt explicabo dolor, necessitatibus ullam commodi quasi natus accusamus voluptates magnam praesentium esse repudiandae sit quaerat dolorem!</p>
                    <div className="card-action lighten-4 gery-text">
                        <div>Posted by Adam Kabbara</div>
                        <div>12 December, 2018</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
