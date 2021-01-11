import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';


const ProjectSummary = ({ project }) => {
    return (
        <div>
            <p key={project.id}>{project.title} </p>
            <span>{moment(project.createdAt.toDate()).calendar()}</span>                 
        </div>
    )
}

export default ProjectSummary;

