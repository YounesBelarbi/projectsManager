import React from 'react';
import { connect } from 'react-redux';


import SignedOutLinks from './signedOutLinks';
import SignedInLinks from './signedInLinks';


const navbar = (props) => {
    console.log('navbar',props)
    return (
        <div>
            <SignedOutLinks/>
            <SignedInLinks/>
        </div>
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
)(navbar);

export default navbarContainer;
