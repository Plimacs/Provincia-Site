import React from "react";3
import { Link } from "react-router-dom";
import './Registrar.css';

const Registrar = () => {
    return(
        <div className="register-container">
            <header className="register-header">
                <img src="logo.png" alt="Logo do Minecraft" className="logo" />
                <h1 className="register-title">Registre-se no nosso site, e de graça!</h1>
            </header>

            <form className="register-form">
                <div className="input-container">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" id="email" placeholder="MeuEmail@Email.com" />
                </div>
                <div className="input-container">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="senha" id="senha" placeholder="**************" />
                </div>
                <div className="input-container">
                    <label htmlFor="senha2">Repita sua senha:</label>
                    <input type="password" name="senha2" id="senha2" placeholder="**************" />
                </div>
                <div className="input-container">
                    <label htmlFor="nick">Nome do Jogador:</label>
                    <input type="text" name="nick" id="nick" placeholder="Usuário" />
                </div>

                <Link to="/login" className="login-link">
                    <button className="login-button">Logar</button>
                </Link>

                <button className="create-account-button">Criar Conta</button>
            </form>
        </div>
    );
};

export default Registrar;