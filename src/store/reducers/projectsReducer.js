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
        case 'UPDATE_PROJECT_SUCCESS': {
            console.log('update project success')
            return state
        }
        case 'UPDATE_PROJECT_ERROR': {
            console.log('update project error', action.error)
        }
        case 'DELETE_PROJECT_SUCCESS': {
            console.log('delete project success')
            return state
        }
        case 'DELETE_PROJECT_ERROR': {
            console.log('delete project error', action.error)
        }
        default:
            return state;   
    }
}

export default projectsReducer;