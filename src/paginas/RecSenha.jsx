import React from "react";3
import { Link } from "react-router-dom";
import './RecSenha.css';
import CompRecSenha from "../components/CompRecSenha";

const RecSenha = () => {
    return(
        <div className="password-recovery-container">
            <header className="password-recovery-header">
                <img src="logo.png" alt="Logo do Minecraft" className="logo" />
                <h1 className="password-recovery-title">Recuperação de Senha</h1>
            </header>

            <form className="password-recovery-form">
                <div className="input-container">
                    <label htmlFor="nick">Nome do Jogador:</label>
                    <input type="text" name="nick" id="nick" placeholder="Usuário" />
                </div>

                <CompRecSenha />
              
            </form>
        </div>
    );
};

export default RecSenha;