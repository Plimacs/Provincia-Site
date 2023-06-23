import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    return(
        <><div className="login-container">
                <header className="login-header">
                    <img src="https://w7.pngwing.com/pngs/345/622/png-transparent-buff-knight-idle-rpg-runner-gabriel-knight-sins-of-the-fathers-wonder-knights-retro-shooter-rpg-gurk-ii-the-8-bit-rpg-rpg-tears-revolude-android-purple-game-android-thumbnail.png" alt="Logo do Minecraft" className="logo" />
                    <h1 className="login-title">Faça login na sua conta.</h1>
                </header>

                <form className="login-form">
                    <div className="input-container">
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" name="email" id="email" placeholder="MeuEmail@Email.com" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" id="senha" placeholder="****************" />
                    </div>

                    <Link to="/recsenha" className="forgot-password-link">Esqueceu sua senha? (；′⌒`)</Link>

                    <button className="login-button">Logar</button>

                    <Link to="/registrar" className="create-account-link">
                        <button className="register-button">Criar Conta</button>
                    </Link>
                </form>
            </div></>
    );
};

export default Login;