import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { signOutAction } from '../../store/actions/authActions';


const signedOutLinks = (props) => {
    return (
        <div>
            <ul>
            <li>
                <Link to="/">Nouveau projet</Link>
            </li>
            <li>
                <Link to="/" onClick={props.signOut}>se déconnecter</Link>
            </li>
            </ul>                
        </div>
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
)(signedOutLinks);

export default signedOutLinksContainer
