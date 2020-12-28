const initialState = {};

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': {
            console.log('create project success')
            return state
        }
        case 'CREATE_PROJECT_ERROR': {
            console.log('create project error')
        }     
        default:
            return state;   
    }
}

export default projectsReducer;