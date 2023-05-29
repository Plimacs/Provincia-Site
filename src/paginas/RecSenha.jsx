import React from "react";3
import { Link } from "react-router-dom";

const RecSenha = () => {
    return(
        <div className="conteiner">
            <header className="header">
                <img src="" alt=""/>
                <samp>Complete os campos a baixo, e verifique sua caixa de email. </samp>
            </header>

            <form>
                <div className="imputContainer">
                    <label htmlFor="nick">Nome do Jogador:</label>
                    <input type="text" name="nick" id="nick" placeholder="MatheuzimDoMine" />
                </div>
                <div className="imputContainer">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" id="email" placeholder="MeuEmail@Email.com" />
                </div>

                <Link to="/login"><button className="button">Enviar e voltar a tela de Login</button></Link>
            </form>
        </div>
    );
};

export default RecSenha;