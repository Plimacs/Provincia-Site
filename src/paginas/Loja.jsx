import React from "react";
import './Loja.css';

const Loja = () => {
    return(
        <div className="loja-container">
            <h1 className="loja-title">Bem-vindo à Loja do Minecraft!</h1>
            <p className="loja-description">Encontre os melhores itens e recursos para suas aventuras!</p>
            <img
                className="loja-image"
                src="minecraft-store.png"
                alt="Loja do Minecraft"
            />
            <div className="loja-products">
                <div className="product">
                    <img
                        className="product-image"
                        src="diamond-sword.png"
                        alt="Espada de Diamante"
                    />
                    <h2 className="product-title">Espada de Diamante</h2>
                    <p className="product-description">A arma mais poderosa para enfrentar inimigos.</p>
                    <p className="product-price">$10.99</p>
                    <button className="product-button">Comprar</button>
                </div>
                <div className="product">
                    <img
                        className="product-image"
                        src="enchanted-armor.png"
                        alt="Armadura Encantada"
                    />
                    <h2 className="product-title">Armadura Encantada</h2>
                    <p className="product-description">Proteção máxima para suas aventuras perigosas.</p>
                    <p className="product-price">$15.99</p>
                    <button className="product-button">Comprar</button>
                </div>
                <div className="product">
                    <img
                        className="product-image"
                        src="potion.png"
                        alt="Poção"
                    />
                    <h2 className="product-title">Poção</h2>
                    <p className="product-description">Restaure sua saúde e ganhe poderes especiais.</p>
                    <p className="product-price">$5.99</p>
                    <button className="product-button">Comprar</button>
                </div>
            </div>
            <div className="loja-footer">
                <p className="footer-text">Aprimore sua experiência no Minecraft com os melhores itens!</p>
                <button className="footer-button">Explorar mais itens</button>
            </div>
        </div>
    );
};

export default Loja;