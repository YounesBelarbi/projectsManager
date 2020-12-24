export const signInAction = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=> {
                dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((error) => {
            dispatch({type: 'LOGIN_ERROR', error})
        })
    }
}

export const signOutAction = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(() =>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUpAction = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();
                
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, 
            newUser.password
            ).then(resp => {
                return firestore.collection('users').doc(resp.user.uid).set({
                  firstName: newUser.firstName,
                  lastName: newUser.lastName,
                  initial: newUser.firstName[0] + newUser.lastName[0]
                });
            }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'});
        }).catch((error) => {
            dispatch({type:'SIGNUP_ERROR', error})
        });
    }
}