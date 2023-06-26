import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./paginas/Home.jsx";
import SejaVip from './paginas/SejaVip.jsx';
import CompraFinalizada from './paginas/Comprafinalizada.jsx';
import Vote from './paginas/Vote.jsx';
import Regras from './paginas/Regras.jsx';
import Duvidas from './paginas/Duvidas.jsx';
import Suporte from './paginas/Suporte.jsx';
import Login from './paginas/Login.jsx';
import Registrar from './paginas/Registrar.jsx';
import RecSenha from './paginas/RecSenha.jsx';
import Perfil from './paginas/Perfil.jsx';
import ErrorPage from './paginas/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sejavip",
        element: <SejaVip />,
      },
      {
        path: "comprafinalizada/:randomKey",
        element: <CompraFinalizada />,
      },
      {
        path: "vote",
        element: <Vote />,
      },
      {
        path: "regras",
        element: <Regras />,
      },
      {
        path: "duvidas",
        element: <Duvidas />,
      },
      {
        path: "suporte",
        element: <Suporte />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registrar",
        element: <Registrar />,
      },
      {
        path: "recsenha",
        element: <RecSenha />,
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
