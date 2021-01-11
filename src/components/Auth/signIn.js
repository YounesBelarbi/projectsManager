import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import {signInAction} from '../../store/actions/authActions';
import { RedirectAuthenticatedUser } from './authenticationChecker';


class  SignIn extends Component {
  state = {
    email:'',
    password:''
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {   
    return (
      <Grid textAlign='center' style={{ paddingTop: 200}} verticalAlign='middle'>
        <Grid.Column className="sign_in_form" style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Connexion à votre compte
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Email'
              id='email'
              type="email"
              onChange={this.handleChange} 
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Mot de passe'
                id='password'
                type= "password"
                onChange={this.handleChange}
              />
              <Button color='blue' fluid size='large'>
                Me connecter
              </Button>
            </Segment>
          </Form>
          <Message>
            Nouveau? <Link to="/signUp">s'inscrire</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signInAction(creds))
  }
}

export default RedirectAuthenticatedUser(connect(
  null,
  MapDispatchToProps
  )(SignIn)); 