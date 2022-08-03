
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from '../components/Nav';
import CrsEmpresas from '../components/CrsEmpresas';
import EmpresasHome from '../components/EmpresasHome';
import React, { useEffect, useState } from 'react';
import Lupa from '../assets/img/lupa.png';


export default function Search(props) {

    const [search, setSearch] = useState();
    const [mensaje, setMensaje] = useState();
    const [idUser, setIdUser] = useState(null);
    const [aviso, setAviso] = useState();
    const [empresa, setEmpresa] = useState();

    function buscar(e) {

    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                empresas: search,
            }),
        };

        fetch('search', requestOptions)
            .then(res => res.json())
            .then((res) => {
                setEmpresa(res); props.setEmpresa1(res);
                
                if (res == null) {
                    window.location.assign("/noencontrado");
                }else {
                    document.querySelector('.ocultarCat').style.display = 'none'
                }
                

               
                //setMensaje(res.message);

            })



       
    }



    return (
        <div className='Home'>


            <Form className="search">
                <img src={Lupa} alt="Lupa" className="imgLupa" />
                <Form.Control
                    type="search"
                    placeholder="           Buscar"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearch(
                        e.target.value,
                        document.querySelector('.imgLupa').style.display = 'none'

                    )}
                />
                
                <input type="button" className="btnBuscar" value="Buscar" onClick={() => buscar()} />
                <div className="barrito"></div>
            </Form>


           
                           





        </div>


    )
}

