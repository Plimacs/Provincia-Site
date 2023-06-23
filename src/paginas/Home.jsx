import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const text = document.getElementById('text');
      const bird1 = document.getElementById('pass1');
      const bird2 = document.getElementById('pass2');
      const btn = document.getElementById('btn');
      const rocks = document.getElementById('pedras');
      const forest = document.getElementById('florest');
      const header = document.getElementById('header');

      text.style.top = 50 + value * -0.1 + '%';
      bird2.style.top = value * -1.5 + 'px';
      bird2.style.left = value * 2 + 'px';
      bird1.style.top = value * -1.5 + 'px';
      bird1.style.left = value * -5 + 'px';
      btn.style.marginTop = value * 1.5 + 'px';
      rocks.style.top = value * -0.12 + 'px';
      forest.style.top = value * 0.25 + 'px';
      header.style.top = value * 0.5 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section>
        <h2 id="text"><span>O melhor RPG do</span><br />Brasil!</h2>

        <img src="https://user-images.githubusercontent.com/65358991/170092504-132fa547-5ced-40e5-ab64-ded61518fac2.png" id="pass1" />
        <img src="https://user-images.githubusercontent.com/65358991/170092542-9747edcc-fb51-4e21-aaf5-a61119393618.png" id="pass2" />
        <img src="https://user-images.githubusercontent.com/65358991/170092559-883fe071-eb4f-4610-8c8b-a037d061c617.png" id="florest" />

        <a href="" id="btn">Jogar Agora!</a>

        <img src="https://user-images.githubusercontent.com/65358991/170092605-eada6510-d556-45cc-b7fa-9e4d1d258d26.png" id="pedras" />
        <img src="https://user-images.githubusercontent.com/65358991/170092616-5a70c4af-2eed-496f-bde9-b5fcc7142a31.png" id="agua" />
      </section>

      <div className="sec">
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
            <div className="feature">
                    <img
                        className="feature-icon"
                        src="adventure-icon.png"
                        alt="Aventura"
                    />
                    <h2 className="feature-title">Tecnologia</h2>
                    <p className="feature-description">Jogue sem mod, e acompanhe o jogo onde estiver! Usufrua da tecnologia Provinia!</p>
                    <iframe src="http://ca-amd-b2.phosting.com.br:11066" width="500" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            <div className="home-footer">
                <p className="footer-text">Junte-se a milhões de jogadores em uma experiência única!</p>
                <button className="footer-button">Comece a Jogar</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;