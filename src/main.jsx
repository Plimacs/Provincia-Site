import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./paginas/Home.jsx";
import Loja from "./paginas/Loja.jsx";
import SejaVip from './paginas/SejaVip.jsx';
import Vote from './paginas/Vote.jsx';
import Regras from './paginas/Regras.jsx';
import Duvidas from './paginas/Duvidas.jsx';
import Suporte from './paginas/Suporte.jsx';
import SuporteContatar from './paginas/SuporteContatar.jsx';
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
        path: "loja",
        element: <Loja />,
      },
      {
        path: "sejavip",
        element: <SejaVip />,
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
        path: "/suporte/:id",
        element: <SuporteContatar />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
