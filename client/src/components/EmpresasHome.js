import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import RectaBody1 from '../assets/img/RectaBody1.png';
import RectaBody2 from '../assets/img/RectaBody2.png';
import RankingRed from '../assets/img/rankingRed.png';
import RankingVer from '../assets/img/rankingVer.png';

function EmpresasHome() {

    const [empresas, setEmpresas] = useState([]);
    const [empresasId, setEmpresasId] = useState([]);

    useEffect(() => {
        fetch('empresasHome')
            .then(response => response.json())
            .then(data => {
                setEmpresas(data); console.log(data);
            }
            )

    }, [])
    function recogerId(id) {

        setEmpresasId(id);
        localStorage.setItem("idEmpresa", id);
        setTimeout(() => {
            window.location.assign("/empresa");



        }, 500);


    }


    return (
        <div className="contenedorEmMast">
            {/* <img src={RectaBody1} alt="RectaBody1" className="RectaBody1" />
            <img src={RectaBody2} alt="RectaBody2" className="RectaBody2" /> */}

            {empresas ? empresas.map((empresa, i) => {
                return (
                    <div >

                        <div className="contenedorEmpresas">

                            <div className="empresaTarjeta">
                                <div className="tarjeta">
                                    <img variant="top" src={empresa.logoUrl} className="imgEmpreMast" />
                                    <div className="contenedorRnakingEm">
                                        {empresa.rating >= 2 ?
                                            <div className="rankingEm">
                                                <img src={RankingVer} alt="RankingVer" className="RankingVer" />
                                                <h1 className="rankingEm1">{empresa.rating}</h1>
                                            </div>
                                            : <div className="rankingEm">
                                                <img src={RankingRed} alt="RankingRed" className="RankingRed" />
                                                <h1 className="rankingEm1">{empresa.rating}</h1>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="contenedorTarjeta1">
                                    <Card.Title onClick={() => recogerId(empresa.id_empresa)} style={{
                                        fontFamily: 'Baloo Paaji 2',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "24px",
                                        lineHeight: "40px",
                                        color: "#000000",
                                        textShadow: "none",
                                        transition: "none",

                                    }}>{empresa.nombre_empresa}</Card.Title>


                                    <Card.Text style={{
                                        fontFamily: 'Lato',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        lineHeight: "2px"
                                    }}>
                                        {empresa.sector}
                                    </Card.Text>
                                    <Card.Text style={{
                                        fontFamily: 'Lato',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        lineHeight: "22px;"
                                    }}>
                                        {empresa.descripcion}
                                    </Card.Text>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }) : <h1>"Loading..."</h1>}


        </div>
    );



}
export default EmpresasHome;