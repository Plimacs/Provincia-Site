import React from "react";
import { Link } from "react-router-dom";
import './Duvidas.css';

const Duvidas = () => {
    return(
        <div className="duvidas-container">
            <h1 className="duvidas-title">Tire suas dúvidas sobre o Minecraft</h1>
            <p className="duvidas-description">Encontre respostas para as perguntas mais comuns dos jogadores.</p>
            <img
                className="duvidas-image"
                src="minecraft-duvidas.png"
                alt="Dúvidas sobre o Minecraft"
            />
            <div className="duvidas-list">
                <div className="duvida">
                    <h2 className="duvida-title">Como construir uma casa?</h2>
                    <p className="duvida-description">Aprenda passo a passo como construir sua casa no Minecraft.</p>
                </div>
                <div className="duvida">
                    <h2 className="duvida-title">O que são os biomas?</h2>
                    <p className="duvida-description">Descubra os diferentes biomas do Minecraft e suas características.</p>
                </div>
                <div className="duvida">
                    <h2 className="duvida-title">Como encontrar diamantes?</h2>
                    <p className="duvida-description">Saiba as melhores estratégias para encontrar diamantes no jogo.</p>
                </div>
            </div>
            <div className="duvidas-footer">
                <p className="footer-text">Não encontrou a resposta para sua dúvida? Entre em contato conosco.</p>
                <Link to="/suporte"><button className="footer-button">Contato</button></Link>
            </div>
        </div>
    );
};

export default Duvidas;