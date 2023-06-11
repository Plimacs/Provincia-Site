import React from "react";3
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    return(
        <div className="conteiner">
            <header className="header">
                <img src="" alt=""/>
                <samp>Faça login na sua conta. (*￣3￣)╭</samp>
            </header>

            <form>
                <div className="imputContainer">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" id="email" placeholder="MeuEmail@Email.com" />
                </div>
                <div className="imputContainer">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="senha" id="senha" placeholder="****************" />
                </div>

                <Link to="/recsenha">Esqueceu sua senha? (；′⌒`)</Link>

                <button className="button">Logar</button>

                <Link to="/registrar"><button className="button">Criar Conta</button></Link>

            </form>
        </div>
    );
};

export default Login;