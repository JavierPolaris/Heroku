import React, { Component, useEffects, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Carga from '../pages/Carga';
import Home from '../pages/Home';
import Nav from './Nav';
import Ranking from '../pages/Ranking';
import About from '../pages/About';
import Log from '../pages/Login';
import Registro from '../pages/Registro';
import Categorias from '../pages/Categorias';
import Empresa from '../pages/Empresa';
import Test from '../pages/Test';
import Noencontrado from '../pages/Noencontrado';

class Main extends Component {

    render() {
      return (
        <div>
          {/* <Nav /> */}
          <Routes>
            
            <Route path='/' element={<Carga />} />
            <Route path='/home' element={<Home />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/login' element={<Log />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/about' element={<About />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/test' element={<Test />} />
            <Route path='/noencontrado' element={<Noencontrado />} />
            <Route path='*' element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </div>
      );
    }
  
    
  
  
  
  }
  export default Main;