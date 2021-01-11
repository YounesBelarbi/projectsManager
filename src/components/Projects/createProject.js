import React, { Component } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { AllowUserIfAuthenticated } from '../Auth/authenticationChecker';
import { createProjectAction } from '../../store/actions/projectsActions';


class  CreateProject extends Component {
	state = {
			title:'',
			content:''
	}
  
	handleChange = (e) => {
		console.log(e)
		this.setState ({[e.target.id] : e.target.value})
	}
  
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createProject(this.state);
		this.props.history.push('/dashboard');
	}
  
	render() {    
		return (
			<Grid container  centered>
				<Grid.Column style={{ paddingTop: 200}}>
					<h2 className='form_title'>Nouveau Projet</h2>
					<Segment>  	
						<Form onSubmit={this.handleSubmit}>
							<Form.Input fluid label='Titre' id='title' onChange={this.handleChange}/>
							<Form.TextArea label='About' label='Contenu'  id='content' onChange={this.handleChange}/>
							<Form.Button>Enregistrer</Form.Button>
						</Form>
					</Segment>
				</Grid.Column>  
		</Grid>
		);
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
		createProject: (project) => dispatch(createProjectAction(project))
	}
}

export default AllowUserIfAuthenticated(connect(
	null,
	MapDispatchToProps
	)(CreateProject)); 


