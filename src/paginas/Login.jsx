import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";
import { useState } from "react";

const Login = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if(loading) {
        return <p>Carregando...</p>;
    }
    return(
        <><div className="login-container">
            <header className="login-header">
             <img src="https://w7.pngwing.com/pngs/345/622/png-transparent-buff-knight-idle-rpg-runner-gabriel-knight-sins-of-the-fathers-wonder-knights-retro-shooter-rpg-gurk-ii-the-8-bit-rpg-rpg-tears-revolude-android-purple-game-android-thumbnail.png" alt="Logo do Minecraft" className="logo" />
             <h1 className="login-title">Faça login na sua conta.</h1>
            </header>
                <form className="login-form">
                    <div className="input-container">
                        <label htmlFor="email">E-mail:</label>
                        <input type="text" name="email" id="email" placeholder="MeuEmail@Email.com"
                        onChange={(e) =>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" id="senha" placeholder="****************" 
                        onChange={(e) =>setPassword(e.target.value)}
                        />
                    </div>

                    <Link to="/recsenha" className="forgot-password-link">Esqueceu sua senha? (；′⌒`)</Link>

                    <button className="login-button" onClick={handleSignIn}>Logar</button>

                    <Link to="/registrar" className="create-account-link">
                        <button className="register-button">Criar Conta</button>
                    </Link>
                </form>
        </div></>
    );
};

export default Login;