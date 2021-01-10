import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button, Container, Header, Segment } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/fr';

import { AllowUserIfAuthenticated } from '../auth/authenticationChecker';
import { deleteProjectAction } from '../../store/actions/projectsActions';


class ProjectDetails extends Component {
  handleDelete = (e) => {
      this.props.deleteProjectAction( this.props.projectId);
      this.props.history.push('/dashboard');
  }

  render() { 

    if (this.props.project) {
      return (
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}> {this.props.project.title} </Header>
            <p style={{ fontSize: '1.33em' }}> {this.props.project.content} </p>
            <p style={{ fontSize: '0.75em' }}> projet créé le {moment(this.props.project.createdAt.toDate()).format("LLL")} </p>
            {this.props.project.updatedAt ?              
            <p style={{ fontSize: '0.75em' }}>
              dernière modification le {moment(this.props.project.updatedAt.toDate()).format("LLL")}
            </p>
            : null}
            <Button as={Link} size='large' to={{
              pathname: '/edit/' + this.props.projectId,
              state: { project: this.props.project }
            }}>
              Modifier le projet
            </Button>
            <Button as='a' size='large'  onClick={this.handleDelete}>
              supprimer le projet
            </Button>
          </Container>
        </Segment>
      )    
    } else {
        return <Redirect to='/dashboard' /> 
    }
  }
}

const mapStateToProps = (state, ownProps) => {
    const projectId = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[projectId] : null;
    return {
        auth: state.firebase.auth,
        project: project,
        projectId: projectId,
        firestore: state.firestore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProjectAction: (projectId) => dispatch(deleteProjectAction(projectId))
    }
}

export default  AllowUserIfAuthenticated(connect( mapStateToProps, mapDispatchToProps)(ProjectDetails));

