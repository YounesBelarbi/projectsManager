import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment } from 'semantic-ui-react';


const home = ({ authId }) => {
  return (
    <div className="App">
      <Segment inverted vertical textAlign="center">
        <Container className="content">
          <Header inverted as="h1">
            Création et gestion de projets
          </Header>
          <p>
            Cette application vous permettra de créer et de gérer facilement tout vos projets.
          </p>
          {!authId ? <Button as={Link} to='signup' size='massive'>Commencer</Button> : null }
        </Container>          
      </Segment>
    </div>
  )
}

const MapStateToProps = (state) => {
  return {
    authId: state.firebase.auth.uid
  }
}

const homeContainer = connect(MapStateToProps, null)(home);

export default homeContainer;