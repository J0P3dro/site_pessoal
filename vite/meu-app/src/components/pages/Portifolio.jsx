import React from "react";
import jpAvatar from '../../assets/jp-avatar.jpg';
import "./Portifolio.css"

function Portifolio(){
    return (
      <main>
       <div className="item-portifólio">
        <a href="https://instagram.com/j_pedro_aragao/" target="_blank">
          <img src={jpAvatar} alt="Capa divulgação portfólios" />
          <p>Instagram João Pedro</p>
        </a>
       </div>

       <div className="item-portifólio">
        <a href="https://academy.comeialabs.com.br/" target="_blank">
          <img src={jpAvatar} alt="Capa divulgação portfólios" />
          <p>Site Academy</p>
        </a>
       </div>

       <div className="item-portifólio">
        <a href="https://academy.comeialabs.com.br/" target="_blank">
          <img src={jpAvatar} alt="Capa divulgação portfólios" />
          <p>Site Academy</p>
        </a>
       </div>
      </main>
    );
}

export default Portifolio;
