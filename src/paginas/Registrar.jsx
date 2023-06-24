import React from "react";3
import { Link } from "react-router-dom";
import './Registrar.css';
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";

export const Registrar = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if(loading) {
        return <p>Carregando...</p>;
    }
  
    return(
        <div className="register-container">
            <header className="register-header">
                <img src="logo.png" alt="Logo do Minecraft" className="logo" />
                <h1 className="register-title">Registre-se no nosso site, e de graça!</h1>
            </header>

            <form className="register-form">
                <div className="input-container">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" id="email" placeholder="MeuEmail@Email.com"
                    onChange={(e) => setEmail(e.target.value
                        )} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="senha" id="senha" placeholder="**************"
                    onChange={(e) => setPassword(e.target.value
                        )} 
                     />
                </div>
                <div className="input-container">
                    <label htmlFor="nick">Nome do usuário:</label>
                    <input type="text" name="nick" id="nick" placeholder="Nome_Do_Usuario" />
                </div>

                <button onClick={handleSignOut} className="create-account-button">Criar Conta</button>

                
                <Link to="/login" className="login-link">
                    <button className="login-button">Logar</button>
                </Link>
            </form>
        </div>
    );
};

export default Registrar;