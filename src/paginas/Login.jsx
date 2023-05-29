import React from "react";3

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

                <a href="">Esqueceu sua senha? (；′⌒`) </a>

                <button className="button">Logar</button>

                <button className="button">Criar Conta</button>

            </form>
        </div>
    );
};

export default Login;