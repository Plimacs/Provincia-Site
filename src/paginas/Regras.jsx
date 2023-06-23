import React from "react";
import { Link } from "react-router-dom";
import './Regras.css';

const Regras = () => {
    return(
        <div className="regras-container">
            <h1 className="regras-title">Regras do Minecraft</h1>
            <p className="regras-description">Conheça as regras essenciais para uma experiência segura e divertida.</p>
            <img
                className="regras-image"
                src="minecraft-regras.png"
                alt="Regras do Minecraft"
            />
            <div className="regras-list">
                <div className="regra">
                    <h2 className="regra-title">Respeite os outros jogadores</h2>
                    <p className="regra-description">Mantenha um comportamento respeitoso e evite linguagem ofensiva.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Não trapaceie</h2>
                    <p className="regra-description">Não utilize mods ou hacks que ofereçam vantagens injustas.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Proteja as construções dos outros</h2>
                    <p className="regra-description">Não destrua ou roube as construções dos outros jogadores.</p>
                </div>
            </div>
            <div className="regras-footer">
                <p className="footer-text">Jogue de forma responsável e contribua para uma comunidade saudável.</p>
                <Link to="/suporte"><button className="footer-button">Sugerir regra</button></Link>
            </div>
        </div>
    );
};

export default Regras;