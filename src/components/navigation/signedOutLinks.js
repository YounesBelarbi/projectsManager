import React, { Component } from 'react';
import { Link } from "react-router-dom";


const signedOutLinks = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/signIn">se connecter</Link>
                </li>
                <li>
                    <Link to="/signUp">s'inscrire</Link>
                </li>
            </ul>                
        </div>
    )
}

export default signedOutLinks
