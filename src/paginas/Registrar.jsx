import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Logo from "../midia/imagens/Logo.png"
import './Registrar.css';

export const Registrar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [SenhaDiferente, setSenhaDiferente] = useState('');
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  async function handleSignUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setSenhaDiferente('As senhas não coincidem');
      return;
    }

    try {
      const createdUser = await createUserWithEmailAndPassword(email, password);
      if (createdUser) {
        navigate('/login');
        alert('Conta criada com sucesso!')
      }
    } catch (error) {
      console.log('Erro ao criar usuário:', error);
      setError(error.message);
    }
  }

  return (
    <div className="register-container">
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

        <button className="register-button" onClick={handleSignUp} disabled={loading}>
          {loading ? 'Salvando...' : 'Registrar'}
        </button>

        <br />
        {error && <p className="error-message">Você inseriu informações inválidas ou esta conta já existe!<br /></p>}
        {SenhaDiferente && <p className="error-message">{SenhaDiferente}</p>}
      </form>
    </div>
  );
};

export default Registrar;
