export const createProjectAction = (project) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((error)=> {
            dispatch({type: 'CREATE_PROJECT_ERROR', error})
        })
    }
}

export const ProjectEditAction = (projectId, project) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection('projects').doc(projectId).update({
            ...project,
            updatedAt: new Date()
        }).then(()=> {
            dispatch({type: 'UPDATE_PROJECT_SUCCESS', project})
        }).catch((error)=> {
            dispatch({type: 'UPDATE_PROJECT_ERROR', error})
        })
    }
}

export const deleteProjectAction = (projectId) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection('projects').doc(projectId).delete()
        .then(()=> {
            dispatch({type: 'DELETE_PROJECT_SUCCESS'})
        }).catch((error)=> {
            dispatch({type: 'DELETE_PROJECT_ERROR', error})
        })
    }
}