import { Link } from "react-router-dom";
import './Suporte.css';

const Suporte = () => {
    return (
        <div className="suporte-container">
            <h1 className="suporte-title">Suporte</h1>
            <p className="suporte-description">
                Precisa de ajuda ou quer entrar em contato com o suporte? Estamos aqui para ajudar!
            </p>
            <div className="suporte-links">
                <Link to="/suporte/Denunciar" className="suporte-link">
                    <img src="denunciar-icon.png" alt="Ícone Denunciar" className="link-icon" />
                    Denunciar
                </Link>
                <Link to="/suporte/Enviar ticket" className="suporte-link">
                    <img src="ticket-icon.png" alt="Ícone Enviar Ticket" className="link-icon" />
                    Enviar ticket
                </Link>
                <Link to="/suporte/Contatar Suporte" className="suporte-link">
                    <img src="contatar-icon.png" alt="Ícone Contatar Suporte" className="link-icon" />
                    Contatar Suporte
                </Link>
            </div>
        </div>
    );
};

export default Suporte;