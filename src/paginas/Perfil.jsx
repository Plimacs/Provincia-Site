import React from "react";
import './Perfil.css';

const Perfil = () => {
    return (
        <div className="PerfilContainer">
            <div className="InfoDoUsuario">
                <h2>Nome do usuario</h2>
                <button className="footer-button">Trocar De Conta</button>
            </div>
            <div>
                <h2>Histórico de compras:</h2>
            </div>
        </div>
    );
};

export default Perfil;