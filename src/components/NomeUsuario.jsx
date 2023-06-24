import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const NomeUsuario = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        firebase.database().ref('usuarios/' + userId).once('value')
          .then((snapshot) => {
            const data = snapshot.val();
            if (data && data.nome) {
              setNomeUsuario(data.nome);
            }
          })
          .catch((error) => {
            console.error('Erro ao obter o nome do usuário:', error);
          });
      } else {
        setNomeUsuario('');
      }
    });
    return () => {
      authListener();
    };
  }, []);

  return (
        <p>{nomeUsuario ? nomeUsuario : ''}</p>
  );
};

export default NomeUsuario;
