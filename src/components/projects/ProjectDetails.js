import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

import { AllowUserIfAuthenticated } from '../auth/authenticationChecker';


const ProjectDetails = ({ project, projectId }) => {
    if (project) {
        return (
            <div>
                <h3>project detail</h3>
                <p>{project.content}</p>
                <Link   
                to={{
                    pathname: '/edit/' + projectId,
                    state: { project: project }
                }}>
                    modifier le projet
                </Link>
            </div>
        )
    } else {
        return <Redirect to='/dashboard' /> 
    }
}

const mapStateToProps = (state, ownProps) => {
    const projectId = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[projectId] : null;
    return {
        auth: state.firebase.auth,
        project: project,
        projectId: projectId,
        firestore: state.firestore
    }
}

export default  AllowUserIfAuthenticated(connect( mapStateToProps, null)(ProjectDetails));

