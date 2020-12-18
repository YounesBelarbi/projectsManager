import React, { Component } from 'react';
import { Form, Input, Button, Grid, Segment } from 'semantic-ui-react';


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

export default SignIn; 