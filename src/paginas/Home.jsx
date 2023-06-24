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
            <h1 className="home-title">Bem-vindo a Província!</h1>
            <p className="home-description">A melhor experiência RPG que você pode ter no minecraft!</p>
            <img
                className="home-image"
                src="minecraft-image.png"
                alt="Minecraft"
            />
            <div className="home-features">
                <div className="feature">
                    <img
                        className="feature-icon"
                        src="adventure-icon.png"
                        alt="Aventura"
                    />
                    <h2 className="feature-title">Totalmente sem mods!</h2>
                    <p className="feature-description">Jogue uma aventura repleta de criatuas mágicas, chefões poderosos, histórias com finais alternativos, itens especiais com poderes únicos, pets e montarias super poderosas para te ajudar nas suas batalhas e você ainda pode acompanhar seu jogo de onde estiver!</p>
                    <iframe src="http://ca-amd-b2.phosting.com.br:11066" width="500" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
                <div className="feature">
                    <img
                        className="feature-icon"
                        src="adventure-icon.png"
                        alt="Aventura"
                    />
                    <h2 className="feature-title">Conquistas e Guerras</h2>
                    <p className="feature-description">Monte um time e domine Província batalhando nas guerras de clãs!</p>
                </div>
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
                    <h2 className="feature-title">Aventura</h2>
                    <p className="feature-description">Enfrente criaturas perigosas, explore masmorras e enfrente chefes poderosos.</p>
                </div>
            </div>
            <div className="home-footer">
                <p className="footer-text">Junte-se a vários jogadores em uma experiência única!</p>
                <button className="footer-button">Comece a Jogar</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;