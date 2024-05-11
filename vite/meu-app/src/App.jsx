import React, { Fragment } from 'react';
import './App.css';
import jpAvatar from './assets/jp-avatar.jpg';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Curriculo from './components/header/Curriculo';
import Portifolio from './components/pages/Portifolio';
import Contato from './components/pages/Contato';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
      <Fragment>
        <Header />

        <nav>
          <ul>
            <li className='button'><Link to="/">Currículo</Link></li>
            <li className='button'><Link to="/portifolio">Portfólio</Link></li>
            <li className='button'><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Curriculo />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
