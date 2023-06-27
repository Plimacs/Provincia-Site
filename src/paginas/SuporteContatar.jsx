import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './SuporteContatar.css';

const SuporteContatar = () => {
    const { id } = useParams();
    
    const navigate = useNavigate();

    const handleSuporte = () => {
        console.log("Contato Enviado");
        return navigate("/");
    };

    return (
        <div className="support-contact-container">
            <h1 className="support-contact-title">{id}</h1>
            <button className="send-ticket-button" onClick={handleSuporte}>Enviar Ticket</button>
        </div>
    );
};

export default SuporteContatar;