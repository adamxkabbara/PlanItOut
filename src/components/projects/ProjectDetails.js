import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetails({project}) {
    if (project) {
        return (
            <div className='container section project-details'>
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                    <div className="card-action lighten-4 gery-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>12 December, 2018</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading Plan</p>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projets'}
    ])
)(ProjectDetails)
