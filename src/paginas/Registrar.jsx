import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import './Registrar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export const Registrar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  async function handleSignUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    try {
      const createdUser = await createUserWithEmailAndPassword(email, password);
      if (createdUser) {
        toast.success('Conta criada com sucesso!');
      }
    } catch (error) {
      console.log('Erro ao criar usuário:', error);
    }
  }

  return (
    <div className="register-container">
      <ToastContainer />
      <header className="register-header">
      <img src="https://w7.pngwing.com/pngs/345/622/png-transparent-buff-knight-idle-rpg-runner-gabriel-knight-sins-of-the-fathers-wonder-knights-retro-shooter-rpg-gurk-ii-the-8-bit-rpg-rpg-tears-revolude-android-purple-game-android-thumbnail.png" alt="Logo do provisoria" className="logo" />
        <h1 className="register-title">Registre-se no nosso site, é de graça!</h1>
      </header>

      <form className="register-form">
        <div className="input-container">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="MeuEmail@Email.com"
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmar-senha">Confirme Sua Senha:</label>
          <input
            type="password"
            name="confirmar-senha"
            id="confirmar-senha"
            placeholder="****************"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p>Obs: Sua senha deve ter mais de 6 digitos</p>
        {error && <p className="erroMensagens"><br/>Você inseriu informações inválidas ou esta conta já existe!</p>}
       <br/>

        <button className="register-button" onClick={handleSignUp} disabled={loading}>
          {loading ? 'Salvando...' : 'Registrar'}
        </button>

      </form>
      
      <Link to="/login" className="create-account-link">
          <button className="button">Voltar a tela de login</button>
        </Link>
    </div>
  );
};

export default Registrar;
