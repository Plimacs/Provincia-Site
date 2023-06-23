import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return(

            <header id="header">
              <a href="/" className="logo">Província</a>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sejavip">SejaVip</Link></li>
                <li><Link to="/vote">Vote</Link></li>
                <li><Link to="/regras">Regras</Link></li>
                <li><Link to="/duvidas">Duvidas</Link></li>
                <li><Link to="/suporte">Suporte</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </header>

    );
};

export default NavBar;