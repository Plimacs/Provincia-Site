import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../services/firebaseConfig";
import Logo from "../midia/imagens/Logo.png"
import NomeUsuario from "./NomeUsuario";
import "./NavBar.css";


const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <header id="header">
      <div className="logo">
        <img src={Logo} alt="Província"/>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sejavip">Seja Vip</Link></li>
        <li><Link to="/vote">Vote</Link></li>
        <li><Link to="/regras">Regras</Link></li>
        <li><Link to="/duvidas">Duvidas</Link></li>
        <li><Link to="/suporte">Suporte</Link></li>
        {!user && (
          <li><Link to="/login">Logar ou Criar Conta</Link></li>
        )}
        {user && (
          <>
            <li>
              <Link to="/perfil">Área do Cliente</Link>
            </li>
            <li>
              <NomeUsuario className="nome-usuario"/>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default NavBar;
