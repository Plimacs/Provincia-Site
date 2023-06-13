import React from "react";3
import { Link } from "react-router-dom";
import './RecSenha.css';

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
                    <input type="text" name="nick" id="nick" placeholder="MatheuzimDoMine,ErinDaPicareta" />
                </div>
                <div className="input-container">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" id="email" placeholder="MeuEmail@Email.com" />
                </div>

                <Link to="/login" className="login-link">
                    <button className="send-button">Enviar e voltar à tela de Login</button>
                </Link>
            </form>
        </div>
    );
};

export default RecSenha;