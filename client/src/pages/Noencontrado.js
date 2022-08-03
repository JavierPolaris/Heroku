import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Search from '../components/Search';
import CrsEmpresas from '../components/CrsEmpresas';
import no1 from '../assets/img/no1.png';
import no2 from '../assets/img/no2.png';
import no3 from '../assets/img/no3.png';
import no4 from '../assets/img/no4.png';
import RankingRed from '../assets/img/rankingRed.png';
import RankingVer from '../assets/img/rankingVer.png';


export default function Noencontrado() {

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





    }





    return (

        <div className='Home'>
            <Nav />
            <h1 className="tituloLog">Buscar</h1>

            <Search setEmpresa1={setEmpresa} />

            <br></br>
            <div className="containerNoencontrado">
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
                })


                    : <div className='noencontrado1'>
                        <img src={no1} alt="noencontrado" className='no1' />
                        <img src={no2} alt="noencontrado" className='no2' />
                        <img src={no3} alt="noencontrado" className='no3' />
                        <img src={no4} alt="noencontrado" className='no4' />
                    </div>

                }









            </div>
        </div>
    );
}