import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { signOutAction } from '../../store/actions/authActions';


const SignedOutLinks = (props) => {
    return (
        <Container>   
            <Menu.Item
                as={NavLink} 
                exact to="/"
                name='Accueil'
                activeStyle={{
                    background:'#1279c6',
                }}  
            />            
            <Menu.Item 
                as={NavLink} to="/dashboard"
                name='Mes projets'
                activeStyle={{
                    background:'#1279c6',
                }}
            />
            <Menu.Item 
                as={NavLink} to="/createProject"
                name='Nouveau projet'
                activeStyle={{
                    background:'#1279c6',
                }}
            />
            <Menu.Item position='right'>
                <Button 
                    as={NavLink} to="/"  
                    color='blue'
                    name='signOut'  
                    onClick={props.signOut}
                >
                    se déconnecter
                </Button>
            </Menu.Item>
        </Container> 
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutAction())
    }
}

const signedOutLinksContainer = connect(
    null,
    MapDispatchToProps
)(SignedOutLinks);

export default signedOutLinksContainer;
