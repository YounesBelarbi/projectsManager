import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';


const ProjectSummary = ({ project }) => {
    return (
        <div className='project_summary'>
            <p key={project.id}> Projet: {project.title} </p>             
        </div>
    )
}

export default ProjectSummary;

