import { Link } from "react-router-dom";
import './Suporte.css';

const Suporte = () => {
    return (
        <div className="suporte-container">
            <h1 className="suporte-title">Suporte</h1>
            <p className="suporte-description">
                Precisa de ajuda ou quer entrar em contato com o suporte? Estamos aqui para ajudar!
            </p>
            <div className="suporte-discord">
              <iframe src="https://discord.com/widget?id=941454618137886760&theme=dark" width="500" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
            <p className="suporte-description">Utilize os formulários a baixo caso o discord não esteja funcionando.</p>
            <div className="suporte-links">
                <Link to="/suporte/Denunciar" className="suporte-link">
                    <img src="denunciar-icon.png" className="link-icon" />
                    Denunciar
                </Link>
                <Link to="/suporte/Enviar ticket" className="suporte-link">
                    <img src="ticket-icon.png" className="link-icon" />
                    Enviar ticket
                </Link>
                <Link to="/suporte/Contatar Suporte" className="suporte-link">
                    <img src="contatar-icon.png" className="link-icon" />
                    Contatar Suporte
                </Link>
            </div>
        </div>
    );
};

export default Suporte;