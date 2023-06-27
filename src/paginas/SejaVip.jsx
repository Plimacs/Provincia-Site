import React from "react";
import { Link } from "react-router-dom";
import './SejaVip.css';

const SejaVip = () => {
    return(
        <div className="loja-container">
            <h1 className="loja-title">Apoie Província comprando produtos da nossa loja! </h1>
            <p className="loja-description">Assim você ajuda a manter o servidor online.ヽ(✿ﾟ▽ﾟ)/</p>
            <img
                className="loja-image"
                src="minecraft-store.png"
                alt="Assinaturas e Vantagens Vips"
            />
            <div className="loja-products">
                <div className="product">
                    <img
                        className="product-image"
                        src="diamond-sword.png"
                        alt="Vip Apoiador"
                    />
                    <h1 className="footer-text">Vip Apoiador</h1>
                    <h2 className="footer-text">Vantagens do vip:</h2>
                    <p className="product-description">- Tag exclusiva para apoiadores</p>
                    <p className="product-description">- Loja vip</p>
                    <p className="product-description">- Cosméticos vip</p>
                    <p className="product-description">- Acesso rápido ao /warps</p>
                    <p className="product-description">- Acesso livre ao servidor quando lotado</p>
                    <p className="product-description">- Acesso ao canal privado do discord exclusivo para Vips</p>
                    <p className="product-description">- Kit mensal para apoiadores</p>
                    <p className="product-description">- Kit semanal para apoiadores</p>
                    <h1 className="footer-text">Brindes:</h1>
                    <p className="product-description">- 1 asa exclusiva.</p>
                    <p className="product-description">- 1 item épico do seu gosto.</p>
                    <p className="product-description">- 2 cristais de retorno.</p>
                    <p className="product-description">- 1 vasoura mágica com 10 vidas</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <p className="product-price">R$19,99</p>
                    <button className="product-button">Comprar</button>
                </div>
                <div className="product">
                    <img
                        className="product-image"
                        src="enchanted-armor.png"
                        alt="Vip Padrinho"
                    />
                    <h1 className="footer-text">Vip Padrinho</h1>
                    <h2 className="footer-text">Vantagens do vip:</h2>
                    <p className="product-description">- Tag exclusiva para Padrinhos</p>
                    <p className="product-description">- Loja vip</p>
                    <p className="product-description">- Cosméticos vip</p>
                    <p className="product-description">- Acesso rápido ao /warps</p>
                    <p className="product-description">- Acesso ao comando /nick</p>
                    <p className="product-description">- Acesso a cores ao enviar mensagens no chat</p>
                    <p className="product-description">- Acesso livre ao servidor quando lotado</p>
                    <p className="product-description">- Acesso ao canal privado do discord exclusivo para Vips</p>
                    <p className="product-description">- Kit mensal para Padrinhos</p>
                    <p className="product-description">- Kit semanal para Padrinhos</p>
                    <h1 className="footer-text">Brindes:</h1>
                    <p className="product-description">- 1 asa exclusiva.</p>
                    <p className="product-description">- 1 Ocarina exclusiva para vips.</p>
                    <p className="product-description">- 1 item épico do seu gosto.</p>
                    <p className="product-description">- 4 cristais de retorno.</p>
                    <p className="product-description">- 1 vasoura mágica com 10 vidas</p>
                    <p className="product-description">- Set completo de roupas RGB que mudam de cor</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <p className="product-price">R$39,99</p>
                    <button className="product-button">Comprar</button>
                </div>
                <div className="product">
                    <img
                        className="product-image"
                        src="potion.png"
                        alt="Vip Patricinador"
                    />
                    <h1 className="footer-text">Vip Patrocinador</h1>
                    <h2 className="footer-text">Vantagens do vip:</h2>
                    <p className="product-description">- Tag RGB exclusiva para Patrocinadores</p>
                    <p className="product-description">- Loja vip</p>
                    <p className="product-description">- Cosméticos vip</p>
                    <p className="product-description">- Acesso rápido ao /warps</p>
                    <p className="product-description">- Acesso ao comando /nick</p>
                    <p className="product-description">- Acesso a cores ao enviar mensagens no chat</p>
                    <p className="product-description">- Acesso livre ao servidor quando lotado</p>
                    <p className="product-description">- Acesso ao canal privado do discord exclusivo para Vips</p>
                    <p className="product-description">- Kit mensal para Patrocinadores</p>
                    <p className="product-description">- Kit semanal para Patrocinadores</p>
                    <h1 className="footer-text">Brindes:</h1>
                    <p className="product-description">- 1 asa exclusiva.</p>
                    <p className="product-description">- 2 Ocarina exclusiva para vips.</p>
                    <p className="product-description">- 2 itens épicos do seu gosto.</p>
                    <p className="product-description">- 5 cristais de retorno.</p>
                    <p className="product-description">- 2 vasouras mágicas com 10 vidas</p>
                    <p className="product-description">- 1 coroa exclusiva para patrocinadores</p>
                    <p className="product-description">- Set completo de roupas RGB que mudam de cor</p>
                    <p className="product-description">- 10 Xaropes RGB que te deixam brilhando em RGB por 25 minutos.</p>
                    <br/>
                    <br/>
                    <p className="product-price">R$79,99</p>
                    <button className="product-button">Comprar</button>
                </div>
            </div>
            <div className="loja-footer">
                <p className="footer-text">Tá sem grana? Existem outras formas de obter vantagens ajudando o servidor!</p>
                <p className="footer-text">Apenas votando no nosso servidor você pode ganhar prêmios! Você nos ajuda e nós te ajudamos.</p>
                <Link to="/vote"><button className="footer-button">Ganhar Itens De Graça!</button></Link>
            </div>
        </div>
    );
};

export default SejaVip;