const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR': {
            return {
                ...state,
                authError: 'Erreur dans votre e-mail ou votre mot de passe, merci de verifier votre saisie'
            }
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                authError: null
            }
        }
        case 'SIGNOUT_SUCCESS': {
            return state
        }     
        case 'SIGNUP_SUCCESS': {
            return state
        }  
        case 'SIGNUP_ERROR': {
            return {
                ...state,
                authError: action.error
            }
        }  
        default: {
            return state
        }            
    }    
}

export default authReducer;