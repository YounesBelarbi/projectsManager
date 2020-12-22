import React from 'react'

import {AllowUserIfAuthenticated} from '../auth/authenticationChecker'


const CreateProject = () => {
    return (
        <div>
            <h3>création de projet</h3>
        </div>
    )
}

export default AllowUserIfAuthenticated(CreateProject);

