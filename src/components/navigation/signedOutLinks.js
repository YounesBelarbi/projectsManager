import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const SignedOutLinks = () => {
    return (
        <Container>
            <Menu.Item
                as={NavLink} to="/"
                name='Accueil'
                activeStyle={{
                    background:'#1279c6',
                }}
  
            />        
            <Menu.Item position='right'>
                <Button 
                    as={NavLink} to="/signIn"  
                    color='blue'
                    name='signIn'  
                >
                    se connecter
                </Button>
                <Button 
                    style={{ marginLeft: '0.5em' }}
                    as={NavLink} to="/signUp"  
                    color='blue'
                    name='signUp' 
                >
                    s'inscrire
                </Button>
            </Menu.Item>
      </Container>
    )
}

export default SignedOutLinks
