import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/database';
import './SetNome.css';

const SetNome = () => {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUsuario(user);
      } else {
        setUsuario(null);
      }
    });

    return () => {
      authListener();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario) {
      const userId = usuario.uid;
      firebase
        .database()
        .ref('usuarios/' + userId)
        .set({
          nome: nome,
        })
        .then(() => {
          setNome('');
          window.location.reload();
        })
        .catch((error) => {
          console.error('Erro ao salvar o nome do usuário:', error);
        });
    } else {
      <p className='erro-autenticacao'>('Você precisa fazer login antes.');</p>
    }
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomeimput">Nome do usuário:</label>
        <input
          type="text" id="nomeInput" value={nome} onChange={handleNomeChange} required maxLength={10} placeholder="ex: STEVE"
        />
        <button type="submit" className='salvar'>Salvar</button>
        {error && <p className="error-message">Você inseriu informações inválidas ou esta conta já existe!<br /></p>}
      </form>
    </div>
  );
};

export default SetNome;
