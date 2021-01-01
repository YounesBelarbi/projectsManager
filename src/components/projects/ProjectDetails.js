import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

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
                <div>
                    <h3>project detail</h3>
                    <p>{this.props.project.content}</p>
                    <Link 
                        to={{
                            pathname: '/edit/' + this.props.projectId,
                            state: { project: this.props.project }
                        }}>
                        modifier le projet
                    </Link>
                    <div>
                        <button onClick={this.handleDelete}>supprimer le projet </button>
                    </div>
                </div>
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

