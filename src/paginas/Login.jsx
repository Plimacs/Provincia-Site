import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("logado");
      navigate("/perfil");
    } catch (error) {
      toast.error('Nenhuma conta encontrada! Verifique seu email e senha.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="login-container">
      <ToastContainer />
      <header className="login-header">
        <img src="https://w7.pngwing.com/pngs/345/622/png-transparent-buff-knight-idle-rpg-runner-gabriel-knight-sins-of-the-fathers-wonder-knights-retro-shooter-rpg-gurk-ii-the-8-bit-rpg-rpg-tears-revolude-android-purple-game-android-thumbnail.png" width="70" height="70" alt="Logo do provisoria" className="logo" />
        <h1 className="login-title">Faça login na sua conta.</h1>
      </header>
      <form className="login-form">
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
        <div className="input-container">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="****************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to="/recsenha" className="forgot-password-link">Esqueceu sua senha? (；′⌒`)</Link>

        <ul>
          <button className="login-button" onClick={handleSignIn} disabled={loading}>
            {loading ? 'Carregando...' : 'Logar'}
          </button>

          <Link to="/registrar" className="create-account-link">
            <button className="register-button">Criar Conta</button>
          </Link>
        </ul>

        <br/>
      </form>
    </div>
  );
};

export default Login;
