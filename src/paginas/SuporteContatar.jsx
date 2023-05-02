import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SuporteContatar = () => {
    const { id } = useParams();
    
    const navigate = useNavigate();

    const handleSuporte = () => {
        console.log("Contato Enviado");
        return navigate("/");
    };

    return (
        <div>
            <h1>{id}</h1>
            <button onClick={handleSuporte}>Enviar Ticket</button>
        </div>
    );
};

export default SuporteContatar;