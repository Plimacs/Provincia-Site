import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Perfil.css';
import SetNome from "../components/SetNome";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import NomeUsuario from "../components/NomeUsuario";


const Perfil = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        firebase.database().ref('usuarios/' + userId).once('value')
          .then((snapshot) => {
            const data = snapshot.val();
            if (data && data.nome) {
              setNomeUsuario(data.nome);
            }
          })
          .catch((error) => {
            console.error('Erro ao obter o nome do usuário:', error);
          });
        firebase.database().ref('usuarios/' + userId + '/compras').on('value', (snapshot) => {
          const comprasData = snapshot.val();
          const comprasArray = comprasData ? Object.values(comprasData) : [];
          setCompras(comprasArray);
        });
      } else {
        setNomeUsuario('');
        setCompras([]);
      }
    });
    return () => {
      const authListener = firebase.auth().onAuthStateChanged((user) => {
      const userId = user.uid;
      authListener();
      firebase.database().ref('usuarios/' + userId + '/compras').off('value');
    })};
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      console.log("Logout com sucesso");
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div className="PerfilContainer">
      <div className="InfoDoUsuario">
        <h1><NomeUsuario /></h1>
        {nomeUsuario ? '' : <SetNome />}
        <Link to="/login" className="create-account-link">
          <button onClick={handleLogout} className="botao-logout">
            Sair da conta
          </button>
        </Link>
      </div>
      <br/>
      <br/>
      <div>
        <h2>Suas Chaves:</h2>
        <br/>
        <ul>
          {compras.map((compra, index) => (
            <li key={index}>{compra}</li>
          ))}
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
      <p>Caso tenha algum problema com suas chaves ou seu perfil, entre em contato com nosso suporte.</p>
      <div className="duvidas-footer">
        <p className="footer-text">Estamos sempre dispostos a te ajudar!</p>
        <Link to="/suporte"><button className="SuporteButton">Contato</button></Link>
      </div>
    </div>
  );
};

export default Perfil;