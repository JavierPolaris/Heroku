import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Ocio from '../assets/img/Ocio.png';
import Compras from '../assets/img/Compras.png';
import Sanidad from '../assets/img/Sanidad.png';
import Euro from '../assets/img/Euro.png';
import Telefono from '../assets/img/Telefono.png';
import Estatal from '../assets/img/Estatal.png';



function CrsEmpresas() {
    const [empresas, setEmpresas] = useState([]);

    const buscarCategoria = (categoria) => {
        console.log(categoria)
        localStorage.setItem('categoria', JSON.stringify(
            categoria
          ));
          window.location.assign("/categorias");
      };

    // fetch('crsEmpresas')
    //     .then(response => response.json())
    //     .then(data => {

    //     }
    //     )

    return (
        <div>
            <div className="contenedorCate">
                <button className="botnesCate" style={{
                    backgroundColor: '#E27817',
                    display: 'flex',
                    justifyContent: 'center',
                }} onClick={() => buscarCategoria("Ocio")}>
                    <img src={Ocio} alt="Ocio" className="imgCate" />
                    Ocio</button>

                <button className="botnesCate" style={{
                    backgroundColor: '#038929',
                    display: 'flex',
                    justifyContent: 'center',
                }} onClick={() => buscarCategoria("Supermercados")}>
                    <img src={Compras} alt="Compras" className="imgCate" />
                    Compras</button>
                    
                <button className="botnesCate" style={{
                    backgroundColor: '#49BCC4',
                    display: 'flex',
                    justifyContent: 'center',
                }} onClick={() => buscarCategoria("Sanidad")}>
                    <img src={Sanidad} alt="Sanidad" className="imgCate" />
                    Sanidad</button>

                <button className="botnesCate" style={{
                    backgroundColor: '#4A4D9B',
                    display: 'flex',
                    justifyContent: 'center',
                }} onClick={() => buscarCategoria("Banca")}>
                    <img src={Euro} alt="Euro" className="imgCate" />
                    Banca</button>

                <button className="botnesCate" style={{
                    backgroundColor: '#3F62DF',
                    display: 'flex',
                    justifyContent: 'center',
                }} onClick={() => buscarCategoria("Telefonia")}>
                    <img src={Telefono} alt="Telefono" className="imgCate" />
                    Telefonía</button>
                    
                <button className="botnesCate" style={{
                    backgroundColor: '#9B4A93',
                    display: 'flex',
                    justifyContent: 'center',
                }} onClick={() => buscarCategoria("Estatal")}>
                    <img src={Estatal} alt="Estatal" className="imgCate" />
                    Estatal</button>



            </div>
        </div>
    );

}
export default CrsEmpresas;