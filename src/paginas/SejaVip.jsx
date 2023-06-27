import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './SejaVip.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useNavigate } from 'react-router-dom';


const SejaVip = () => {
    const navigate = useNavigate();
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
    
    const transferirChaveApoiador = () => {
        const userId = firebase.auth().currentUser.uid;
        const vipsRef = firebase.database().ref('vips/apoiador');
      
        vipsRef.once('value')
          .then((snapshot) => {
            const vipsData = snapshot.val();
            const vipKeys = Object.keys(vipsData);
            const randomIndex = Math.floor(Math.random() * vipKeys.length);
            const randomKey = vipKeys[randomIndex];
            const randomValue = vipsData[randomKey];
            const userRef = firebase.database().ref('usuarios/' + userId +'/compras');

            userRef.update({ [randomKey]: randomValue })
              .then(() => {
                vipsRef.child(randomKey).remove();
                console.log('compra efetuada com sucesso')
                navigate(`/Comprafinalizada/${randomKey}`);
              })
              .catch((error) => {
                console.error('Erro ao transferir a chave:', error);
              });
          })
          .catch((error) => {
            console.error('Erro ao obter os dados do nó "vips/apoiador":', error);
          });
      };
      const transferirChavePadrinho = () => {
        const userId = firebase.auth().currentUser.uid;
        const vipsRef = firebase.database().ref('vips/padrinho');
      
        vipsRef.once('value')
          .then((snapshot) => {
            const vipsData = snapshot.val();
            const vipKeys = Object.keys(vipsData);
            const randomIndex = Math.floor(Math.random() * vipKeys.length);
            const randomKey = vipKeys[randomIndex];
            const randomValue = vipsData[randomKey];
            const userRef = firebase.database().ref('usuarios/' + userId + '/compras');
      
            userRef.update({ [randomKey]: randomValue })
              .then(() => {
                vipsRef.child(randomKey).remove();
                console.log('compra efetuada com sucesso')
                navigate(`/Comprafinalizada/${randomKey}`);
              })
              .catch((error) => {
                console.error('Erro ao transferir a chave:', error);
              });
          })
          .catch((error) => {
            console.error('Erro ao obter os dados do nó "vips/padrinho":', error);
          });
      };
      const transferirChavePatrocinador = () => {
        const userId = firebase.auth().currentUser.uid;
        const vipsRef = firebase.database().ref('vips/patrocinador');
      
        vipsRef.once('value')
          .then((snapshot) => {
            const vipsData = snapshot.val();
            const vipKeys = Object.keys(vipsData);
            const randomIndex = Math.floor(Math.random() * vipKeys.length);
            const randomKey = vipKeys[randomIndex];
            const randomValue = vipsData[randomKey];
            const userRef = firebase.database().ref('usuarios/' + userId + '/compras');
      
            userRef.update({ [randomKey]: randomValue })
              .then(() => {
                vipsRef.child(randomKey).remove();
                console.log('compra efetuada com sucesso')
                navigate(`/Comprafinalizada/${randomKey}`);
              })
              .catch((error) => {
                console.error('Erro ao transferir a chave:', error);
              });
          })
          .catch((error) => {
            console.error('Erro ao obter os dados do nó "vips/patrocinador":', error);
          });
      };
    return(
        <div className="loja-container">
            <h1 className="loja-title">Apoie Província comprando produtos da nossa loja! </h1>
            <p className="loja-description">Assim você ajuda a manter o servidor online.ヽ(✿ﾟ▽ﾟ)/</p>
            <br/>
            <br/>
            <br/>
            <p>Assinaturas Mensais (o゜▽゜)o☆</p>
            <div className="loja-products">
                <div className="product">
                    <img
                        className="product-image"
                        src="diamond-sword.png"
                        alt="Vip Apoiador"
                    />
                    <h1 className="footer-text">Vip Apoiador</h1>
                    <p className="product-price">R$19,99</p>
                    <button onClick={transferirChaveApoiador} className="product-button">Comprar</button>
                    <br/>
                    <br/>
                    <h2 className="footer-text">Vantagens do vip:</h2>
                    <p className="product-description">- Tag exclusiva para apoiadores</p>
                    <p className="product-description">- Loja vip</p>
                    <p className="product-description">- Cosméticos vip</p>
                    <p className="product-description">- Acesso rápido ao /warps</p>
                    <p className="product-description">- Acesso livre ao servidor quando lotado</p>
                    <p className="product-description">- Acesso ao canal privado do discord exclusivo para Vips</p>
                    <p className="product-description">- Kit mensal para apoiadores</p>
                    <p className="product-description">- Kit semanal para apoiadores</p>
                    <h1 className="footer-text">Brindes:</h1>
                    <p className="product-description">- 1 asa exclusiva.</p>
                    <p className="product-description">- 1 item épico do seu gosto.</p>
                    <p className="product-description">- 2 cristais de retorno.</p>
                    <p className="product-description">- 1 vasoura mágica com 10 vidas</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <p className="product-price">R$19,99</p>
                    <button onClick={transferirChaveApoiador} className="product-button">Comprar</button>
                </div>
                <div className="product">
                    <img
                        className="product-image"
                        src="enchanted-armor.png"
                        alt="Vip Padrinho"
                    />
                    <h1 className="footer-text">Vip Padrinho</h1>
                    <p className="product-price">R$39,99</p>
                    <button onClick={transferirChavePadrinho} className="product-button">Comprar</button>
                    <br/>
                    <br/>
                    <h2 className="footer-text">Vantagens do vip:</h2>
                    <p className="product-description">- Tag exclusiva para Padrinhos</p>
                    <p className="product-description">- Loja vip</p>
                    <p className="product-description">- Cosméticos vip</p>
                    <p className="product-description">- Acesso rápido ao /warps</p>
                    <p className="product-description">- Acesso ao comando /nick</p>
                    <p className="product-description">- Acesso a cores ao enviar mensagens no chat</p>
                    <p className="product-description">- Acesso livre ao servidor quando lotado</p>
                    <p className="product-description">- Acesso ao canal privado do discord exclusivo para Vips</p>
                    <p className="product-description">- Kit mensal para Padrinhos</p>
                    <p className="product-description">- Kit semanal para Padrinhos</p>
                    <h1 className="footer-text">Brindes:</h1>
                    <p className="product-description">- 1 asa exclusiva.</p>
                    <p className="product-description">- 1 Ocarina exclusiva para vips.</p>
                    <p className="product-description">- 1 item épico do seu gosto.</p>
                    <p className="product-description">- 4 cristais de retorno.</p>
                    <p className="product-description">- 1 vasoura mágica com 10 vidas</p>
                    <p className="product-description">- Set completo de roupas RGB que mudam de cor</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <p className="product-price">R$39,99</p>
                    <button onClick={transferirChavePadrinho} className="product-button">Comprar</button>
                </div>
                <div className="product">
                    <img
                        className="product-image"
                        src="potion.png"
                        alt="Vip Patricinador"
                    />
                    <h1 className="footer-text">Vip Patrocinador</h1>
                    <p className="product-price">R$79,99</p>
                    <button onClick={transferirChavePatrocinador} className="product-button">Comprar</button>
                    <br/>
                    <br/>
                    <h2 className="footer-text">Vantagens do vip:</h2>
                    <p className="product-description">- Tag RGB exclusiva para Patrocinadores</p>
                    <p className="product-description">- Loja vip</p>
                    <p className="product-description">- Cosméticos vip</p>
                    <p className="product-description">- Acesso rápido ao /warps</p>
                    <p className="product-description">- Acesso ao comando /nick</p>
                    <p className="product-description">- Acesso a cores ao enviar mensagens no chat</p>
                    <p className="product-description">- Acesso livre ao servidor quando lotado</p>
                    <p className="product-description">- Acesso ao canal privado do discord exclusivo para Vips</p>
                    <p className="product-description">- Kit mensal para Patrocinadores</p>
                    <p className="product-description">- Kit semanal para Patrocinadores</p>
                    <h1 className="footer-text">Brindes:</h1>
                    <p className="product-description">- 1 asa exclusiva.</p>
                    <p className="product-description">- 2 Ocarina exclusiva para vips.</p>
                    <p className="product-description">- 2 itens épicos do seu gosto.</p>
                    <p className="product-description">- 5 cristais de retorno.</p>
                    <p className="product-description">- 2 vasouras mágicas com 10 vidas</p>
                    <p className="product-description">- 1 coroa exclusiva para patrocinadores</p>
                    <p className="product-description">- Set completo de roupas RGB que mudam de cor</p>
                    <p className="product-description">- 10 Xaropes RGB que te deixam brilhando em RGB por 25 minutos.</p>
                    <br/>
                    <br/>
                    <p className="product-price">R$79,99</p>
                    <button onClick={transferirChavePatrocinador} className="product-button">Comprar</button>
                </div>
            </div>
            <div className="loja-footer">
                <p className="footer-text">Tá sem grana? Existem outras formas de obter vantagens ajudando o servidor!</p>
                <p className="footer-text">Apenas votando no nosso servidor você pode ganhar prêmios! Você nos ajuda e nós te ajudamos.</p>
                <Link to="/vote"><button className="VoteButton">Ganhar Itens De Graça!</button></Link>
            </div>
        </div>
    );
};

export default SejaVip;