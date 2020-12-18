import React from 'react';
import { Link } from "react-router-dom";

function navbar() {
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
            </ul>
        </div>
    )
}

export default navbar
