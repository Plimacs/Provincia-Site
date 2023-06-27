import React from "react";
import { Link } from "react-router-dom";
import './Duvidas.css';

const Duvidas = () => {
    return(
        <div className="duvidas-container">
            <h1 className="duvidas-title">Dúvidas frequentes <br /> щ(゜ロ゜щ)</h1>
            <p className="duvidas-description">Encontre respostas para as perguntas mais comuns dos jogadores.</p>
            <br/>
            <br/>
            <br/>
            <h2 className="duvidas-title">Lista de dúvidas e respostas. _(´･ω･`)?</h2>
            
            <div className="duvidas-list">
            
                <div className="duvida">
                    <h2 className="duvida-title">Como jogar em Província?</h2>
                    <p className="duvida-description">É bem simples, basta ter o minecraft java, conexão com a internet e seguir este passo a passo:
                    <br /><br />1º  Verifique se você tem o minecraft java, o java e o discord instalados no seu computador.
                    <br /><br />2º  abra seu minecraft na versão 1.20, clique em "Multijogador" e clique na opção "Adicionar servidor", na caixa "Nome do servidor:" você vai colocar "Província" e na caixa "Endereço do servidor:" você vai colocar "provinciasvr.com.br" e vai deixar o botão "pacotes de recursos" em "SIM", os pacotes de recursos são muito importantes para que você consiga jogar. quando finalizado clique em "Concluído".
                    <br /><br />3º  Ao tentar se conectar, você vai ser desconectado e um código vai ser gerado na sua tela, copie este código, entre no nosso discord e envie este código no privado do nosso bot.
                    <br /><br />4º  Agora você vai se conectar novamente, e vai se registrar. digite "/Register" e coloque a senha que você deseja duas vezes, exempo: "/register senha123 senha123" (obs: não utilize senhas obvias como esta).
                    <br /><br /> Tudo pronto! Agora é so jogar e ser feliz. caso tenha algum problema contate o nosso suporte no discord.</p>
                </div>
                <div className="duvida">
                    <h2 className="duvida-title">Meu computador é fraco, consigo jogar?</h2>
                    <p className="duvida-description">Por não usarmos mods, a maioria dos processos são feitos pelo nosso servidor, até mesmo as animações das montarias, pets, criaturas e chefões são feitas pelo nosso servidor.
                    <br />Se seu computador rodar o mine 1.20, você vai conseguir jogar no nosso servidor.</p>
                </div>
                <div className="duvida">
                    <h2 className="duvida-title">Como eu protejo meu terreno?</h2>
                    <p className="duvida-description">O /warp tutorial ensina como você pode fazer isso de uma maneira bem mais prática, mas é bem simples, basta pegar uma pá de ouro na mão e clicar com o botão direito no chão marcando 2 pontos, se as marcas ficarem douradas com blocos de ouro e luzes e sinal que tudo deu certo e seu terreno está protegido, não esqueça de dar /sethome, para não perder a localização da sua casa.</p>
                </div>
            </div>
            <div className="duvidas-footer">
                <p className="footer-text">Não encontrou a resposta para sua dúvida? Entre em contato conosco.</p>
                <Link to="/suporte"><button className="SuporteButton">Contato</button></Link>
            </div>
        </div>
    );
};

export default Duvidas;