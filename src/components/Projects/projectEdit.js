import React, { Component } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { projectEditAction } from '../../store/actions/projectsActions';


class  ProjectEdit extends Component {
    state = {
        title:'',
        content:''
    }
    
    componentDidMount(){
        this.setState({
            title: this.props.location.state.project.title,
            content: this.props.location.state.project.content
        })

    }
    
    handleChange = (e) => {
        this.setState ({[e.target.id] : e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.ProjectEditAction(this.props.match.params.id, this.state);
        this.props.history.push('/dashboard');
    }
    
    render() {    
        return (
            <Grid container  >
                <Grid.Column style={{ paddingTop: 200}}>
                    <h2 className='form_title'>Modifier le projet</h2>
                    <Segment>  	
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Input fluid label='Titre' id='title' onChange={this.handleChange} value={this.state.title}/>
                            <Form.TextArea label='About' label='Contenu'  id='content' onChange={this.handleChange} value={this.state.content}/>
                            <Form.Button>Enregistrer</Form.Button>
                        </Form>
                    </Segment>
                </Grid.Column>  
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.firestore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ProjectEditAction: (projectId, project) => dispatch(projectEditAction(projectId, project))
    }
}

const ProjectEditContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);

export default ProjectEditContainer;