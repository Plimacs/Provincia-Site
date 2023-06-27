import React from "react";
import { Link } from "react-router-dom";
import './Regras.css';

const Regras = () => {
    return(
        <div className="regras-container">
            <h1 className="regras-title">Regras<br/>(｡･_･)ﾉﾞ</h1>
            <p className="regras-description">  Você não precisa gravar as regras do servidor, apenas tendo bom senso você segue as regras. </p>
            <br/>
            <br/>
            <br/>
            <h2 className="regras-title">{"Pode ou não pode? _(._.)>"}</h2>
            
            <div className="regras-list">
            
                <div className="regra">
                    <h2 className="regra-title">Regra - 01</h2>
                    <p className="regra-description"> Proibido usar as regras de má fé ou para benefício próprio, sejá para prejudicar ou beneficiar um jogadores ou staff.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 02</h2>
                    <p className="regra-description"> Não toleramos qualquer tipo de trapaça ou qualquer coisa que dê vantagens sobre os demais jogadores. sejam bug, programas externos ou modificações no seu jogo.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 03</h2>
                    <p className="regra-description"> Mantenha um comportamento respeitoso e evite linguagens ofensivas. evite Spam, flood e palavras de baixo calão.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 04</h2>
                    <p className="regra-description"> Não toleramos desrespeito, ou importunação, independente de quem seja ou a quem seja, jogadores ou staff, todos estão sujeitos a punições.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 05</h2>
                    <p className="regra-description"> Proibido a comercialização de Itens do jogo em troca de conteúdo NSFW ou de cunho ilegal. outras trocas são permitidas, dentro do nosso discord ou servidor.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 06</h2>
                    <p className="regra-description"> Proibido qualquer ato de grifing, vandalismo ou construçoes NSFW no mapa.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 07</h2>
                    <p className="regra-description"> Proibido qualquer tipo de divulgação, seja de rede social, servidor ou qualquer outra coisa, sem a devida permissão.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 08</h2>
                    <p className="regra-description"> Proibido áudios estourados e áudios NSFW. ou audios e músicas sem a concepção dos ouvintes.</p>
                </div>
                <div className="regra">
                    <h2 className="regra-title">Regra - 09</h2>
                    <p className="regra-description"> Proibido roubar, enganar ou lezar outros jogadores.</p>
                </div>
            </div>
            <div className="regras-footer">
                <p className="footer-text">Jogue de forma responsável e contribua para uma comunidade saudável.</p>
                <Link to="/suporte"><button className="SuporteButton">Sugerir regra</button></Link>
            </div>
        </div>
    );
};

export default Regras;