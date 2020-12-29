import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import { AllowUserIfAuthenticated } from '../auth/authenticationChecker';


const ProjectDetails = ({ project }) => {
    if (project) {
        return (
            <div>
                <h3>project detail</h3>
                <p>{project.content}</p>
            </div>
        )
    } else {
        return <Redirect to='/dashboard' /> 
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
      return {
          auth: state.firebase.auth,
          project: project
      }
  }
  
export default AllowUserIfAuthenticated(compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
    return [
    {collection: 'projects', where: ['authorId', '==', props.auth.uid]} 
    ]})
)(ProjectDetails))

 