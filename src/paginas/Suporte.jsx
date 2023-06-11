import { Link } from "react-router-dom";
import './Suporte.css';

const Suporte = () => {
    return (
        <div>
            <h1>Suporte</h1>
            {}
            <p>
                <Link to="/suporte/Denunciar">Denunciar</Link>
                <Link to="/suporte/Enviar ticket">Enviar ticket</Link>
                <Link to="/suporte/Contatar Suporte">Contatar Suporte</Link>
            </p>
        </div>
    );
};

export default Suporte;