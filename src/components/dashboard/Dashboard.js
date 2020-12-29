import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { isLoaded } from 'react-redux-firebase'

import ProjectList from '../projects/ProjectList';


const Dashboard = ({ projects }) => {
    if (!isLoaded(projects)) {
        return <div>Loading...</div>
      }
    return (
        <ProjectList projects = {projects}/>
      )
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        uid: state.firebase.auth.uid
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
  return [
  {collection: 'projects', where: ['authorId', '==', props.uid]} 
  ]})
)(Dashboard)
  



