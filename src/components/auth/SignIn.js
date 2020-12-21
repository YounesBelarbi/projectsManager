import React, { Component } from 'react';
import { Form, Input, Button, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';


import {signInAction} from '../../store/actions/authActions';


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
      <Grid container  centered>
        <Grid.Column >
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field
                id='email'
                control={Input}
                label='Email'
                placeholder='votre email'
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
    signIn: (creds) => dispatch(signInAction(creds))
  }
}

export default connect(
  null,
  MapDispatchToProps
  )(SignIn); 