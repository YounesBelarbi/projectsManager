const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR': {
            console.log('login error ')
            return {
                ...state,
                authError: 'login failed'
            }
        }
        case 'LOGIN_SUCCESS': {
            console.log('login success ')
            return {
                ...state,
                authError: null
            }
        }
        case 'SIGNOUT_SUCCESS': {
            console.log('signOut success ');
            return state
        }     
        case 'SIGNUP_SUCCESS': {
            console.log('signup success ');
            return state
        }  
        case 'SIGNUP_ERROR': {
            console.log(action.err)
            return {
                ...state,
                authError: action.err
            }
        }  
        default: {
            return state
        }            
    }    
}

export default authReducer;