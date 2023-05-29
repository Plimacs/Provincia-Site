import React from "react";3
import { Link } from "react-router-dom";

const Registrar = () => {
    return(
        <div className="conteiner">
            <header className="header">
                <img src="" alt=""/>
                <samp>Registre-se no nosso site, e de graça!</samp>
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
                <div className="imputContainer">
                    <label htmlFor="senha">Repita sua senha:</label>
                    <input type="password" name="senha2" id="senha2" placeholder="****************" />
                </div>
                <div className="imputContainer">
                    <label htmlFor="nick">Nome do Jogador:</label>
                    <input type="text" name="nick" id="nick" placeholder="MatheuzimDoMine" />
                </div>

                <Link to="/login"><button className="button">Logar</button></Link>

                <button className="button">Criar Conta</button>

            </form>
        </div>
    );
};

export default Registrar;