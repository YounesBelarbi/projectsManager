import React, { Component } from 'react';
import { Form, Button, Grid, Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { RedirectAuthenticatedUser } from './authenticationChecker';
import { signUpAction } from '../../store/actions/authActions';


class  SignUp extends Component {
  state = {
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    username:''
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpAction(this.state)
  }

  render() {    
    return (
      <Grid textAlign='center' style={{ paddingTop: 200}} verticalAlign='middle' container>
        <Grid.Column className="sign_in_form" style={{ maxWidth: 700 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Création de compte
          </Header>
          <Form onSubmit={this.handleSubmit} className='sign_up_form'>
            <Segment stacked>
              <Form.Input
                label="Prénom"
                className='sign_up_form_label'
                placeholder='Prénom'
                id='firstName'
                type= "text"
                onChange={this.handleChange}
              />
              <Form.Input
                label="Nom"
                className='sign_up_form_label'
                placeholder='Nom'
                id='lastName'
                type= "text"
                onChange={this.handleChange}
              />
              <Form.Input
                label="Email"
                className='sign_up_form_label'
                placeholder='Email'
                id='email'
                type="email"
                onChange={this.handleChange}
              />
              <Form.Input
                label='Mot de passe'
                className='sign_up_form_label'
                placeholder='Mot de passe'
                id='password'
                type= "password"
                onChange={this.handleChange}
              />
              <Button color='blue' fluid size='large'>
                M'inscrire
              </Button>
            </Segment>
          </Form>

        </Grid.Column>
      </Grid>
    );
  }
}
  
const MapDispatchToProps = (dispatch) => {
  return {
    signUpAction: (newUser) => dispatch(signUpAction(newUser))
  }
}  

const signUpContainer = RedirectAuthenticatedUser(connect(
  null,
  MapDispatchToProps
)(SignUp))

export default signUpContainer; 