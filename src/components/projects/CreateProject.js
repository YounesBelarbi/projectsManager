import React from 'react'

import {UserIsAuthenticated} from '../auth/authenticationChecker'


const CreateProject = () => {
    return (
        <div>
            <h3>création de projet</h3>
        </div>
    )
}

export default UserIsAuthenticated(CreateProject);

