import React, { Component } from 'react';
import { Form, Button, Grid, Segment, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { RedirectAuthenticatedUser } from './authenticationChecker';
import { signUpAction } from '../../store/actions/authActions';


class  SignUp extends Component {
  state = {
    email:'',
    password:'',
    firstName:'',
    lastName:''
  }

  errorMessage = (message) => {
    switch (message) {
      case 'Password should be at least 6 characters': {
        return 'Le mot de passe doit être composé de 6 caractères au minimum.'
      }
      case 'The email address is already in use by another account.': {
        return 'Cette adresse mail n\'est pas disponible'
      }
      case 'The email address is badly formatted.': {
        return 'Format de l\'adresse mail incorrect'
      }    
      default: {
        return null
      }
    }
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
      <Grid textAlign='center' style={{ paddingTop: 200}} verticalAlign='middle' >
        <Grid.Column  style={{ maxWidth: 700 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Création de compte
          </Header>
          <Form size='mini' onSubmit={this.handleSubmit} className='sign_up_form' >
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
              {this.props.authError.authError ? <p className='error_message'>{this.errorMessage(this.props.authError.authError.message)}</p>: null}
            </Segment>
          </Form>
          <Message style={{ width: '95%', margin:'1em auto'}}>
            Déjà inscrit? <Link to="/signIn">me connecter</Link>
          </Message>
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

const MapStateToProps = (state) => {
  return {
    authError: state.auth
  }
}

const signUpContainer = RedirectAuthenticatedUser(connect(
  MapStateToProps,
  MapDispatchToProps
)(SignUp))

export default signUpContainer; 