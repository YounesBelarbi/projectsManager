import React from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'semantic-ui-react'

import ProjectSummary from './ProjectSummary';


const ProjectList = ({ projects } ) => {
    return (
      <Grid columns={2} padded centered style={{ paddingTop: 80}}>
        <Grid.Column width='10'>
            { projects && projects.map(project => {
              return (
                <div key={project.id} className='project_list'>
                  <Link to={'/project/' + project.id} key={project.id}>
                      <ProjectSummary project={project} />
                  </Link>
                </div>
              )
            })}  
        </Grid.Column>
        <Grid.Column width='5' style={{ textAlign: 'center' }}>
          Notifications
        </Grid.Column>        
      </Grid>
    )
}

export default ProjectList;
