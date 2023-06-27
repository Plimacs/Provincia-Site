import React from "react";
import './CompraFinalizada.css'
import { useParams } from 'react-router-dom';

const CompraFinalizada = () => {
        const { randomKey } = useParams();
    return (
        <div className="CompraFinalizada">
            <h2>Compra concluída com sucesso!</h2>
            <br/>
            <h3>Sua contribuição vai nos ajudar a manter o projeto online por mais uns dias, somos muito gratos a você ❣<br/>✨🌟💖(´▽`ʃ❤ƪ)💖🌟✨</h3>
            <br/>
            <br/>
            <h4>aqui está a sua chave de ativação:<h3 className="ChaveComprada"> {randomKey}</h3></h4>
            <br/>
            <p> Para usar é bem simples, basta digitar no chat do jogo "<spam className="ChaveComprada">/usarkey {randomKey}</spam>" e seu vip será ativado em questão de segundos, aproveite!</p>
            <br/>
            <br/>
            <p> Ao sair desta página será possível ver suas chaves no Histórico de compras da área do usuário.</p>
        </div>
    );
};

export default CompraFinalizada;