import React, { Component } from 'react';
import { Form, Input, Button, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { RedirectAuthenticatedUser } from '../auth/authenticationChecker';
import { signUpAction } from '../../store/actions/authActions';


class  SignUp extends Component {
  state = {
    email:'',
    password:'',
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
      <Grid container  centered>
        <Grid.Column >
          <Segment>  
            <Form onSubmit={this.handleSubmit}>
              <Form.Field
                id='email'
                control={Input}
                label='Email'
                placeholder='joe@schmoe.com'
                type="email"
                onChange={this.handleChange}
              />
              <Form.Field
                id='password'
                control={Input}
                label='Password'
                placeholder='password'
                type= "password"
                onChange={this.handleChange}
              />
              <Form.Field
                id='username'
                control={Input}
                label='username'
                placeholder='username'
                type= "text"
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Label with htmlFor'
              />
            </Form>
          </Segment>
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