import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../services/firebaseConfig";
import Logo from "../midia/imagens/Logo.png"
import NomeUsuario from "./NomeUsuario";
import "./NavBar.css";


const NavBar = () => {
  const [user, setUser] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  
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
    <header id="NavBarMaior">
      <ul  className={`RotasMaior ${isActive ? 'active' : ''}`}>
        <div className={`NavBarMenor ${isActive ? 'active' : ''}`} onClick={handleClick}>
         <p className="RotasMenor"></p>
         <p className="RotasMenor"></p>
         <p className="RotasMenor"></p>
        </div>
        <div className="logo">
        <img src={Logo} width="70" height="70" align="left" alt="Província"/>
        </div>
        <li className="Rotas"><Link to="/">Home</Link></li>
        <li className="Rotas"><Link to="/sejavip">Seja Vip</Link></li>
        <li className="Rotas"><Link to="/vote">Vote</Link></li>
        <li className="Rotas"><Link to="/regras">Regras</Link></li>
        <li className="Rotas"><Link to="/duvidas">Duvidas</Link></li>
        <li className="Rotas"><Link to="/suporte">Suporte</Link></li>
        {!user && (
          <li className="Rotas"><Link to="/login">Logar ou Criar Conta</Link></li>
        )}
        {user && (
          <>
            <li className="Rotas">
              <Link to="/perfil">Área do Cliente</Link>
            </li>
            <li className="Rotas">
              <p className="NomeUsuario"><NomeUsuario /></p>
              <button className="LogoutButton" onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
      <div className={`NavBarMenor ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <p className="RotasMenor"></p>
        <p className="RotasMenor"></p>
        <p className="RotasMenor"></p>
      </div>
    </header>
  );
};

export default NavBar;
