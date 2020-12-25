import React from 'react';
import { Link } from "react-router-dom";


const SignedOutLinks = () => {
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

export default SignedOutLinks
