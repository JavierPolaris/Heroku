
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from '../components/Nav';
import CrsEmpresas from '../components/CrsEmpresas';
import EmpresasHome from '../components/EmpresasHome';
import Search from '../components/Search';
import React, { useEffect, useState } from 'react';
import RankingRed from '../assets/img/rankingRed.png';
import RankingVer from '../assets/img/rankingVer.png';

import Lupa from '../assets/img/lupa.png';
import Noencontrado from './Noencontrado';



export default function Home() {

    const [search, setSearch] = useState();
    const [mensaje, setMensaje] = useState();
    const [idUser, setIdUser] = useState(null);
    const [aviso, setAviso] = useState();
    const [empresa, setEmpresa] = useState();

    function buscar(e) {
        //if (e.code === 'Enter') {

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
                setEmpresa(res);


                // if (!res) {
                //     window.location.assign("/noencontrado");
                // }
                // setIdUser(res.user.id);
                // setMensaje(res.message);


            })
        //}


        // if(mensaje === true){
        //     console.log("true");

        // }else{
        //     window.location.assign("/noencontrado");
        // }
    }



    return (
        <div className='Home'>
            <Nav />
            <h1 className="tituloLog">Inicio</h1>

            <Search setEmpresa1={setEmpresa} />


            <CrsEmpresas />
            
            
            {empresa ? empresa.map((empres, i) => {
                return (
                <div className="contenedorEmpresas">
                    
                    <div className="empresaTarjeta">
                        <div className="tarjeta">

                            <img variant="top" src={empres.logoUrl} className="imgEmpreMast" />
                            <div className="contenedorRnakingEm">
                                {empres.rating >= 2 ?
                                    <div className="rankingEm">
                                        <img src={RankingVer} alt="RankingVer" className="RankingVer" />
                                        <h1 className="rankingEm1">{empres.rating}</h1>
                                    </div>
                                    : <div className="rankingEm">
                                        <img src={RankingRed} alt="RankingRed" className="RankingRed" />
                                        <h1 className="rankingEm1">{empres.rating}</h1>
                                    </div>
                                }
                            </div>

                        </div>
                        <div className="contenedorTarjeta1">
                            <Card.Title style={{
                                fontFamily: 'Baloo Paaji 2',
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "24px",
                                lineHeight: "40px"
                            }}>{empres.nombre_empresa}</Card.Title>
                            <Card.Text style={{
                                fontFamily: 'Lato',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "2px"
                            }}>
                                {empres.sector}
                            </Card.Text>

                            <Card.Text style={{
                                        fontFamily: 'Lato',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        lineHeight: "22px;"
                                    }}>
                                        {empres.descripcion}
                                    </Card.Text>
                            


                        </div>
                    </div>
                </div>

                )
            }) : < EmpresasHome />

            }





        </div>


    )
}

