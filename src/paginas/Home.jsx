import React from "react";
import './Home.css';

const Home = () => {
    return (
    
        <div className="home-container">
            <h1 className="home-title">Bem-vindo ao Mundo do Minecraft!</h1>
            <p className="home-description">Explore, construa e divirta-se!</p>
            <img
                className="home-image"
                src="minecraft-image.png"
                alt="Minecraft"
            />
            <div className="home-features">
                <div className="feature">
                    <img
                        className="feature-icon"
                        src="exploration-icon.png"
                        alt="Exploração"
                    />
                    <h2 className="feature-title">Exploração</h2>
                    <p className="feature-description">Descubra um mundo cheio de biomas, cavernas, tesouros e segredos.</p>
                </div>
                <div className="feature">
                    <img
                        className="feature-icon"
                        src="building-icon.png"
                        alt="Construção"
                    />
                    <h2 className="feature-title">Construção</h2>
                    <p className="feature-description">Crie seu próprio mundo, construa casas, castelos, cidades e muito mais.</p>
                </div>
                <div className="feature">
                    <img
                        className="feature-icon"
                        src="adventure-icon.png"
                        alt="Aventura"
                    />
                    <h2 className="feature-title">Aventura</h2>
                    <p className="feature-description">Enfrente criaturas perigosas, explore masmorras e enfrente chefes poderosos.</p>
                </div>
            </div>
            <div className="home-footer">
                <p className="footer-text">Junte-se a milhões de jogadores em uma experiência única!</p>
                <button className="footer-button">Comece a Jogar</button>
            </div>
        </div>
    );
};

export default Home;