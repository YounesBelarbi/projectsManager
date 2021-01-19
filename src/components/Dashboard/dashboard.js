import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { isLoaded } from 'react-redux-firebase';

import ProjectList from '../Projects/ProjectList';


const Dashboard = ({ projects, profile }) => {
  
  if (!isLoaded(projects)) {
      return <div>Loading...</div>
    }

  return (
    <div>
      <div className='initial'>
        <p>{profile.initial}</p>
      </div>
      <ProjectList projects = {projects}/>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        uid: state.firebase.auth.uid,
        profile: state.firebase.profile
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {collection: 'projects', where: ['authorId', '==', props.uid]} 
    ]
  })
)(Dashboard)
  



