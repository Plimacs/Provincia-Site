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
  const [patrocinador, setPatrocinador] = useState([]);
  const [padrinho, setPadrinho] = useState([]);
  const [apoiador, setApoiador] = useState([]);

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
        firebase.database().ref('usuarios/' + userId + '/Ativo/patrocinador').on('value', (snapshot) => {
          const patrocinadorData = snapshot.val();
          const patrocinadorArray = patrocinadorData ? Object.values(patrocinadorData) : [];
          setPatrocinador(patrocinadorArray);
        });
        firebase.database().ref('usuarios/' + userId + '/Ativo/padrinho').on('value', (snapshot) => {
          const padrinhoData = snapshot.val();
          const padrinhoArray = padrinhoData ? Object.values(padrinhoData) : [];
          setPadrinho(padrinhoArray);
        });
        firebase.database().ref('usuarios/' + userId + '/Ativo/apoiador').on('value', (snapshot) => {
          const apoiadorData = snapshot.val();
          const apoiadorArray = apoiadorData ? Object.values(apoiadorData) : [];
          setApoiador(apoiadorArray);
        });
      } else {
        setNomeUsuario('');
        setApoiador([]);
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

  const trocarVipPadrinho = () => {
    const userId = firebase.auth().currentUser.uid;
    const vipsRef = firebase.database().ref('vips/padrinho');

    vipsRef.once('value')
      .then((snapshot) => {
        const vipsData = snapshot.val();
        const vipKeys = Object.keys(vipsData);

        if (vipKeys.length > 0) {
          const randomIndex = Math.floor(Math.random() * vipKeys.length);
          const randomKey = vipKeys[randomIndex];
          const randomValue = vipsData[randomKey];
          const userRef = firebase.database().ref('usuarios/' + userId + '/Ativo');

          userRef.child('padrinho').remove()
            .then(() => {
              userRef.remove()
                .then(() => {
                  const novoPadrinhoRef = firebase.database().ref('usuarios/' + userId + '/Ativo/padrinho');
                  novoPadrinhoRef.update({ [randomKey]: randomValue })
                    .then(() => {
                      vipsRef.child(randomKey).remove();
                      console.log('Vip trocado com sucesso');
                    })
                    .catch((error) => {
                      console.error('Erro ao adicionar nova chave de assinatura:', error);
                    });
                })
                .catch((error) => {
                  console.error('Erro ao excluir nó "Ativo":', error);
                });
            })
            .catch((error) => {
              console.error('Erro ao excluir nó "Ativo/padrinho":', error);
            });
        } else {
          console.error('Não há chaves disponíveis para troca');
        }
      })
      .catch((error) => {
        console.error('Erro ao obter os dados do nó "vips/padrinho":', error);
      });
  };

  const trocarVipPatrocinador = () => {
    const userId = firebase.auth().currentUser.uid;
    const vipsRef = firebase.database().ref('vips/patrocinador');

    vipsRef.once('value')
      .then((snapshot) => {
        const vipsData = snapshot.val();
        const vipKeys = Object.keys(vipsData);

        if (vipKeys.length > 0) {
          const randomIndex = Math.floor(Math.random() * vipKeys.length);
          const randomKey = vipKeys[randomIndex];
          const randomValue = vipsData[randomKey];
          const userRef = firebase.database().ref('usuarios/' + userId + '/Ativo');

          userRef.child('patrocinador').remove()
            .then(() => {
              userRef.remove()
                .then(() => {
                  const novoPatrocinadorRef = firebase.database().ref('usuarios/' + userId + '/Ativo/patrocinador');
                  novoPatrocinadorRef.update({ [randomKey]: randomValue })
                    .then(() => {
                      vipsRef.child(randomKey).remove();
                      console.log('Vip trocado com sucesso');
                    })
                    .catch((error) => {
                      console.error('Erro ao adicionar nova chave de assinatura:', error);
                    });
                })
                .catch((error) => {
                  console.error('Erro ao excluir nó "Ativo":', error);
                });
            })
            .catch((error) => {
              console.error('Erro ao excluir nó "Ativo/patrocinador":', error);
            });
        } else {
          console.error('Não há chaves disponíveis para troca');
        }
      })
      .catch((error) => {
        console.error('Erro ao obter os dados do nó "vips/patrocinador":', error);
      });
  };
  const trocarVipApoiador = () => {
    const userId = firebase.auth().currentUser.uid;
    const vipsRef = firebase.database().ref('vips/apoiador');

    vipsRef.once('value')
      .then((snapshot) => {
        const vipsData = snapshot.val();
        const vipKeys = Object.keys(vipsData);

        if (vipKeys.length > 0) {
          const randomIndex = Math.floor(Math.random() * vipKeys.length);
          const randomKey = vipKeys[randomIndex];
          const randomValue = vipsData[randomKey];
          const userRef = firebase.database().ref('usuarios/' + userId + '/Ativo');

          userRef.child('apoiador').remove()
            .then(() => {
              userRef.remove()
                .then(() => {
                  const novoApoiadorRef = firebase.database().ref('usuarios/' + userId + '/Ativo/apoiador');
                  novoApoiadorRef.update({ [randomKey]: randomValue })
                    .then(() => {
                      vipsRef.child(randomKey).remove();
                      console.log('´Vip trocado com sucesso');
                    })
                    .catch((error) => {
                      console.error('Erro ao adicionar nova chave de assinatura:', error);
                    });
                })
                .catch((error) => {
                  console.error('Erro ao excluir nó "Ativo":', error);
                });
            })
            .catch((error) => {
              console.error('Erro ao excluir nó "Ativo/apoiador":', error);
            });
        } else {
          console.error('Não há chaves disponíveis para troca');
        }
      })
      .catch((error) => {
        console.error('Erro ao obter os dados do nó "vips/patrocinador":', error);
      });
  };

  const CopyButton = ({ text }) => {
    const handleClick = () => {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Comando copiado com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao copiar o comando:', error);
        });
    };
  
    return (
      <button className="Button" onClick={handleClick}>Copiar</button>
    );
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
      <div className="vips-list">
        <h2>Gerencie Seu Vip:</h2>
        <br/>
        <div className="vips-list">
        <ul>
          <h3>Vip Patrocinador:</h3>
          <br/>
          {patrocinador.map((patrocinadorkey, indexPatrocinador) => (
          <div>
            <h4 key={indexPatrocinador}>Sua chave: {patrocinadorkey}</h4>
            <p>Para ativar seu vip basta abrir o chat do jogo e digitar "/usarkey {patrocinadorkey}".</p>
            <h4>Copiar comando: <CopyButton text={`/usarkey ${patrocinadorkey}`}/></h4>
            <p>Uma contagem de 30 dias é iniciada no jogo a partir do momento em que você usar a chave,</p>
            <p>quando a chave expirar você pode adiquirir outra clicando no botão "Renovar".</p>
            <h4>Renove seu vip: <button onClick={trocarVipPatrocinador} className="Button">Renovar</button></h4>
          </div>
          ))}
        </ul>
        {patrocinador.length === 0 && (
          <div>
           <h4>No momento você não possui o vip patrocinador!</h4>
           <p>caso tenha vontade de adiquirir o vip patrocinador, basta clicar no botão a baixo!</p>
           <button onClick={trocarVipPatrocinador} className="Button">
             Trocar de Vip
           </button>
          <p>(Obs: ao adiquirir um novo vip, a chave do seu vip atual será apagada do site, más você ainda pode usar a chave antiga no jogo até ela expirar.)</p>
        </div>)}
        </div>
        <br/>
        <br/>
        <div className="vips-list">
        <ul>
          <h3>Vip Padrinho:</h3>
          <br/>
          {padrinho.map((padrinhokey, indexPadrinho) => (
          <div>
            <h4 key={indexPadrinho}>Sua chave: {padrinhokey}</h4>
            <p>Para ativar seu vip basta abrir o chat do jogo e digitar "/usarkey {padrinhokey}".</p>
            <h4>Copiar comando: <CopyButton text={`/usarkey ${padrinhokey}`}/></h4>
            <p>Uma contagem de 30 dias é iniciada no jogo a partir do momento em que você usar a chave,</p>
            <p>quando a chave expirar você pode adiquirir outra clicando no botão "Renovar".</p>
            <h4>Renove seu vip: <button onClick={trocarVipPadrinho} className="Button">Renovar</button></h4>
          </div>
          ))}
        </ul>
        {padrinho.length === 0 && (
          <div>
           <h4>No momento você não possui o vip padrinho!</h4>
           <p>caso tenha vontade de adiquirir o vip padrinho, basta clicar no botão a baixo!</p>
           <button onClick={trocarVipPadrinho} className="Button">
             Trocar de Vip
           </button>
          <p>(Obs: ao adiquirir um novo vip, a chave do seu vip atual será apagada do site, más você ainda pode usar a chave antiga no jogo até ela expirar.)</p>
        </div>
        )}
        </div>
        <br/>
        <br/>
        <div className="vips-list">
        <ul>
          <h3>Vip Apoiador:</h3>
          <br/>
          {apoiador.map((apoiadorkey, indexApoiador) => (
          <div>
            <h4 key={indexApoiador}>Sua chave: {apoiadorkey}</h4>
            <p>Para ativar seu vip basta abrir o chat do jogo e digitar "/usarkey {apoiadorkey}".</p>
            <h4>Copiar comando: <CopyButton text={`/usarkey ${apoiadorkey}`}/></h4>
            <p>Uma contagem de 30 dias é iniciada no jogo a partir do momento em que você usar a chave,</p>
            <p>quando a chave expirar você pode adiquirir outra clicando no botão "Renovar".</p>
            <h4>Renove seu vip: <button onClick={trocarVipApoiador} className="Button">Renovar</button></h4>
          </div>
          ))}
        </ul>
        {apoiador.length === 0 && (
          <div>
           <h4>No momento você não possui o vip apoiador!</h4>
           <p>caso tenha vontade de adiquirir o vip apoiador, basta clicar no botão a baixo!</p>
           <button onClick={trocarVipApoiador} className="Button">
             Trocar de Vip
           </button>
          <p>(Obs: ao adiquirir um novo vip, a chave do seu vip atual será apagada do site, más você ainda pode usar a chave antiga no jogo até ela expirar.)</p>
        </div>
        )}
        </div>
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