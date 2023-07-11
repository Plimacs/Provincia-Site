import React, { useEffect } from "react";
import './CompraFinalizada.css';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const CompraFinalizada = () => {
  const { randomKey } = useParams();

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        firebase.database().ref('usuarios/' + userId + '/contador').once('value')
          .then((snapshot) => {
            const contadorValue = snapshot.val();
            console.log('Contador:', contadorValue);
          })
          .catch((error) => {
            console.error('Erro ao obter o contador:', error);
          });
      }
    });

    return () => {
      authListener();
    };
  }, []);

  return (
    <div className="CompraFinalizada">
      <h2>Compra concluída com sucesso!</h2>
      <br/>
      <h3>
        Sua contribuição vai nos ajudar a manter o projeto online por mais uns dias, somos muito gratos a você ❣
        <br/>
        ✨🌟💖(´▽`ʃ❤ƪ)💖🌟✨
      </h3>
      <br/>
      <br/>
      <h4>
        Aqui está a sua chave de ativação:
        <span className="ChaveComprada"> {randomKey}</span>
      </h4>
      <br/>
      <p>
        Para usar é bem simples, basta digitar no chat do jogo "<span className="ChaveComprada">/usarkey {randomKey}</span>"
        e seu vip será ativado em questão de segundos, aproveite!
      </p>
      <br/>
      <br/>
      <p>Ao sair desta página, será possível ver suas chaves na área do cliente.</p>
    </div>
  );
};

export default CompraFinalizada;