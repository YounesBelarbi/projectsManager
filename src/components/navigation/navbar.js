import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


import { signOutAction } from '../../store/actions/authActions';


function navbar(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/signIn">se connecter</Link>
                </li>
                <li>
                    <Link to="/signUp">s'inscrire</Link>
                </li>
                <li>
                    <button  onClick={props.signOut}>se deconnecter</button>
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

const navbarContainer = connect(
    null,
    MapDispatchToProps
)(navbar);

export default navbarContainer;
