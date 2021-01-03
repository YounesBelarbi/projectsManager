import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { signOutAction } from '../../store/actions/authActions';


const SignedOutLinks = (props) => {
    return (
        <Container>   
            <Menu.Item
                as={NavLink} to="/home"
                name='Accueil'
            />            
            <Menu.Item 
                as={NavLink} to="/dashboard"
                name='Mes projets'
            />
            <Menu.Item 
                as={NavLink} to="/createProject"
                name='Nouveau projet'
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

export default signedOutLinksContainer
