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
      } else {
        setNomeUsuario('');
      }
    });
    return () => {
      authListener();
    };
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
      <div>
        <h2>Histórico de compras:</h2>
      </div>
    </div>
  );
};

export default Perfil;