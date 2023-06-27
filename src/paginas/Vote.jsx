import React from "react";
import './Vote.css';

const Vote = () => {
    return(
        <div className="vote-container">
            <h1 className="vote-title">Vote no Minecraft</h1>
            <p className="vote-description">Ajude a moldar o futuro do Minecraft. Vote e compartilhe sua opinião!</p>
            <div className="vote-options">
                <div className="option">
                    <h2 className="option-title">Vote em servidores</h2>
                    <p className="option-description">Ajude a eleger os melhores servidores e comunidades do Minecraft.</p>
                </div>
                <div className="option">
                    <h2 className="option-title">Vote em novas funcionalidades</h2>
                    <p className="option-description">Contribua para decidir quais recursos devem ser implementados no jogo.</p>
                </div>
                <div className="option">
                    <h2 className="option-title">Vote com feedback</h2>
                    <p className="option-description">Compartilhe suas ideias e sugestões para melhorar o Minecraft.</p>
                </div>
            </div>
        </div>
    );
};

export default Vote;