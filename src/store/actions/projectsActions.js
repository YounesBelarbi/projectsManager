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
        }).then((docRef)=> {
            firestore.collection('notifications').add({
                content: 'Création du projet: ' + project.title ,
                color: 'blue',
                authorId: authorId,
                createdAt: new Date(),
            })
        }).then(()=> {
            dispatch({type: 'CREATE_PROJECT', project})
            dispatch({type: 'NEW_PROJECT_NOTIFICATION'})
        }).catch((error)=> {
            dispatch({type: 'CREATE_PROJECT_ERROR', error})
        })
    }
}

export const projectEditAction = (projectId, project) => {
    return (dispatch, getState, { getFirebase }) => {  
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid

        firestore.collection('projects').doc(projectId).update({
            ...project,
            updatedAt: new Date()
        }).then(()=> {
            firestore.collection('notifications').add({
                content: 'Modification du projet: ' + project.title,
                color: 'green',
                authorId: authorId,
                createdAt: new Date(),
            })
        }).then(()=> {
            dispatch({type: 'UPDATE_PROJECT_SUCCESS', project}) 
        }).catch((error)=> {
            dispatch({type: 'UPDATE_PROJECT_ERROR', error})
        })
    }
}

export const deleteProjectAction = (projectId, project) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection('projects').doc(projectId).delete()
        .then(()=> {
            firestore.collection('notifications').add({
                content: 'Suppression du projet: ' + project.title,
                color: 'red',
                authorId: project.authorId,
                createdAt: new Date(),
            })
        }).then((r)=> {
            dispatch({type: 'DELETE_PROJECT_SUCCESS'})
        }).catch((error)=> {
            dispatch({type: 'DELETE_PROJECT_ERROR', error})
        })
    }
}