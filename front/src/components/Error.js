import "../styles/header_style.css"
import { Link } from 'react-router-dom';

function Error(){
    
    return (
            <div className="styleError">
                <span className="Error">Error</span>
                <div className="textError" >Oups! La page que vous demandez n'existe pas.</div>
                <Link to="/" className="linkError">Retourner sur la page d’accueil</Link> 
            </div>
    )
}

export default Error