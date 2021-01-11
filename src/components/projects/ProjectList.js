import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Button } from 'semantic-ui-react'

import ProjectSummary from './ProjectSummary';


const ProjectList = ({ projects } ) => {
  if (projects.length) {
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
  } else {
    return (
      <Grid padded centered style={{ paddingTop: 250}}>
        <Grid.Column width='15' style={{ textAlign: 'center'}} >
          <h2> Vous n'avez pas encore de projet</h2>  
          <Button as={Link} to='createProject' size='massive'>Faire un premier projet</Button>
        </Grid.Column>       
      </Grid>
    )
  }
}

export default ProjectList;
