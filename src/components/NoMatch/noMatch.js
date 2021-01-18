import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const noMatch = () => {
    return (
        <div className='no_match'>
            <h2>Ressource introuvable</h2>
            <Button as={Link} to='/' size='massive'>Retour à l'accueil</Button> 
        </div>
    )
}

export default noMatch;
 