import React from 'react';


const ProjectSummary = ({ project }) => {
    return (
        <div>
            <p key={project.id}>{project.title} {project.authorFirstName} {project.authorLastName}</p>     
        </div>
    )
}

export default ProjectSummary;

