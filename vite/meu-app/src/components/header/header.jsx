import React from "react";
import jpAvatar from '../../assets/jp-avatar.jpg';

function header() {
    return<header>
    <img src={jpAvatar} alt="Foto de rosto de João Pedro" />
    <h1 id="nome-perfil">João Pedro Aragão Galhardo</h1>
    <h3 id="eventoSubtitulo">Desenvolvedor de Sofware</h3>
    </header>
}

export default header;
