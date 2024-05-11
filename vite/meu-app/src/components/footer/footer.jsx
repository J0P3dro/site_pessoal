import React from "react";
import iconeInsta from "../../assets/instagram.jpg";

function Footer() {
  return (
    <footer>
      Desenvolvido com amor por Jp Aragão Galhardo xD
      <li>
        <a href="https://instagram.com/j_pedro_aragao/" target="_blank">
          <img src={iconeInsta} alt="Instagram"></img>
        </a>
      </li>
    </footer>
  );
}

export default Footer;
