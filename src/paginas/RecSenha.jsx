import React, { useState } from "react";
import './RecSenha.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';

const RecSenha = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const recoverPassword = () => {
      if (email) {
        showLoading();
        firebase.auth().sendPasswordResetEmail(email)
          .then(() => {
            hideLoading();
            console.log('Email enviado')
            alert('Email enviado com sucesso');
            navigate('/login');
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

    return(
<div className="password-recovery-container">
       <header className="password-recovery-header">
            <img src="logo.png" alt="Logo do Minecraft" className="logo" />
            <h1 className="password-recovery-title">Recuperação de Senha</h1>
        </header>
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
        
        <button type="button" onClick={recoverPassword}>Enviar e voltar à tela de Login</button>

       </form>
</div>
    );
};

export default RecSenha;