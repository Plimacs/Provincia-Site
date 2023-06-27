import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const CompRecSenha = () => {
  const [email, setEmail] = useState('');

  const recoverPassword = () => {
    if (email) {
      showLoading();
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          hideLoading();
          alert('Email enviado com sucesso');
        })
        .catch(error => {
          hideLoading();
          alert(getErrorMessage(error));
        });
    }
  };

  const showLoading = () => {
  };

  const hideLoading = () => {
  };

  const getErrorMessage = (error) => {
  };

  return (
    <div>
      <form className="email">
        <div className="input-container">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="MeuEmail@Email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={recoverPassword}>
          Enviar e voltar à tela de Login
        </button>
      </form>
    </div>
  );
};

export default CompRecSenha;