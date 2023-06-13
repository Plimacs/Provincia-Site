import React from "react";
import './SejaVip.css';

const SejaVip = () => {
    return(
        <div className="seja-vip-container">
            <h1 className="seja-vip-title">Seja VIP no Minecraft!</h1>
            <p className="seja-vip-description">Desfrute de vantagens exclusivas e torne-se um jogador VIP.</p>
            <img
                className="seja-vip-image"
                src="minecraft-vip.png"
                alt="Seja VIP no Minecraft"
            />
            <div className="seja-vip-perks">
                <div className="perk">
                    <img
                        className="perk-icon"
                        src="vip-access.png"
                        alt="Acesso VIP"
                    />
                    <h2 className="perk-title">Acesso VIP</h2>
                    <p className="perk-description">Explore áreas exclusivas e desbloqueie conteúdo especial.</p>
                </div>
                <div className="perk">
                    <img
                        className="perk-icon"
                        src="vip-shop.png"
                        alt="Loja VIP"
                    />
                    <h2 className="perk-title">Loja VIP</h2>
                    <p className="perk-description">Aproveite descontos e ofertas exclusivas em nossa loja.</p>
                </div>
                <div className="perk">
                    <img
                        className="perk-icon"
                        src="vip-support.png"
                        alt="Suporte VIP"
                    />
                    <h2 className="perk-title">Suporte VIP</h2>
                    <p className="perk-description">Tenha suporte prioritário e resolução rápida de problemas.</p>
                </div>
            </div>
            <div className="seja-vip-footer">
                <p className="footer-text">Eleve sua experiência de jogo e seja um jogador VIP!</p>
                <button className="footer-button">Saiba mais</button>
            </div>
        </div>
    );
};

export default SejaVip;