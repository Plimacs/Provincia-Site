import './Suporte.css';

const Suporte = () => {
    return (
        <div className="suporte-container">
            <h1 className="suporte-title">Suporte</h1>
            <p className="suporte-description">
                Precisa de ajuda ou quer entrar em contato com o suporte? Estamos aqui para ajudar!
            </p>
            <div className="suporte-discord">
              <iframe src="https://discord.com/widget?id=941454618137886760&theme=dark" width="400" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    );
};

export default Suporte;