import { Link } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/loja">Loja</Link>
            <Link to="/sejavip">SejaVip</Link>
            <Link to="/vote">Vote</Link>
            <Link to="/regras">Regras</Link>
            <Link to="/duvidas">Duvidas</Link>
            <Link to="/suporte">Suporte</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default NavBar;