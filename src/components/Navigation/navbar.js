import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import SignedOutLinks from './signedOutLinks';
import SignedInLinks from './signedInLinks';


const Navbar = (props) => {
    const {auth} = props;
    const link = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;    
    return (
      <Menu  size='huge' inverted >
        {link}
      </Menu>    
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const navbarContainer = connect(
    mapStateToProps,
    null
)(Navbar);

export default navbarContainer;
