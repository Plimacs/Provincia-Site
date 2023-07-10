import React, { useState } from "react";
import './RecSenha.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const RecSenha = () => {
    const [email, setEmail] = useState('');
    const showLoading = () => {};
    const hideLoading = () => {};

    const recoverPassword = () => {
      if (email) {
        showLoading();
        firebase.auth().sendPasswordResetEmail(email)
          .then(() => {
            hideLoading();
            console.log('Email enviado')
            toast.success('Email enviado com sucesso!');
          })
          .catch(error => {
            hideLoading();
            toast.error('Nenhuma conta encontrada! Verifique seu email.');
          });
      }
      else {
        toast.error('Você deve informar o e-mail de recuperação!');
      }
    };

    return(
  <div>
    <div className="password-recovery-container">
    <ToastContainer />
       <header className="password-recovery-header">
       <img src="https://w7.pngwing.com/pngs/345/622/png-transparent-buff-knight-idle-rpg-runner-gabriel-knight-sins-of-the-fathers-wonder-knights-retro-shooter-rpg-gurk-ii-the-8-bit-rpg-rpg-tears-revolude-android-purple-game-android-thumbnail.png" alt="Logo do provisoria" className="logo" />
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
        <button className="button" type="button" onClick={recoverPassword}>Enviar</button>
        </form>
        <p>Após enviar seu e-mail, você vai receber um e-mail com um link para trocar sua senha, não esqueça de verificar sua caixa de spam.</p>
        <Link to="/login" className="create-account-link">
          <button className="button">Voltar a tela de login</button>
        </Link>
  </div>
</div>
    );
};

export default RecSenha;