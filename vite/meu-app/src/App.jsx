import React, { Fragment } from 'react';
import './App.css';
import jpAvatar from './assets/jp-avatar.jpg';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Curriculo from './components/header/Curriculo';
import Portifolio from './components/pages/Portifolio';

function App() {
  return ( 
    <Fragment>
      <Header></Header>
      
      <nav>
        <ul>
          <li className='button'><a href='#'>Currículo</a></li>
          <li className='button'><a href='#'>Portfólio</a></li> {/* Corrigido */}
          <li className='button'><a href='#'>Contato</a></li>
        </ul>
      </nav>
      <Curriculo></Curriculo>
      <Portifolio></Portifolio>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
