import React from "react";
import jpAvatar from '../../assets/jp-avatar.jpg';
import "./Portifolio.css";

function Portifolio(){

  const portifolios = [
    {
      link: "https://instagram.com/j_pedro_aragao/",
      image: jpAvatar,
      title: "Instagram João Pedro"
    },
    {
      link: "https://academy.comeialabs.com.br/",
      image: jpAvatar,
      title: "Site Comeia Academy"
    },
    {
      link: "https://www.youtube.com/@JoaoPedroAragaoGalhardo/",
      image: jpAvatar,
      title: "Canal Youtube João Pedro"
    }
  ];

  return (
    <main>
      {portifolios.map((portifolio, index) => (
        <div className="item-portifólio" key={index}>
          <a href={portifolio.link} target="_blank">
            <img src={portifolio.image} alt="Capa divulgação portfólios" />
            <p>{portifolio.title}</p>
          </a>
        </div>
      ))}
    </main>
  );
}

export default Portifolio;
