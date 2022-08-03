
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from '../components/Nav';
import CrsEmpresas from '../components/CrsEmpresas';
import EmpresasHome from '../components/EmpresasHome';
import React, { useEffect, useState } from 'react';
import Lupa from '../assets/img/lupa.png';
import Categoria from '../assets/img/categoria.png';
import Ocio from '../assets/img/Ocio.png';
import Compras from '../assets/img/Compras.png';
import Sanidad from '../assets/img/Sanidad.png';
import Euro from '../assets/img/Euro.png';
import Telefono from '../assets/img/Telefono.png';
import Estatal from '../assets/img/Estatal.png';
import Search from '../components/Search';
import RankingRed from '../assets/img/rankingRed.png';
import RankingVer from '../assets/img/rankingVer.png';



export default function Home() {

    const [search, setSearch] = useState();
    const [mensaje, setMensaje] = useState();
    const [idUser, setIdUser] = useState(null);
    const [aviso, setAviso] = useState();
    const [categoria, setCategoria] = useState();
    const [sector, setSector] = useState();
    const [imgEmpresa, setImgEmpre] = useState();

    const [empresasId, setEmpresasId] = useState([]);

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
                setCategoria(null);


            })
        //}
        // if (mensaje === true) {
        //     localStorage.setItem("idUser", idUser);
        //     window.location.assign("/paginaUsuarios");
        // } else {
        //     setInterval(() => {
        //         setAviso("Usuario no encontrado");
        //     }, 1000);
        // }
    }

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                categoria: localStorage.getItem("categoria"),
            }),
        };
        fetch('categorias', requestOptions)
            .then(res => res.json())
            .then((res) => {
                setCategoria(res); console.log(res)


                if (localStorage.getItem("categoria") == '"Ocio"') {
                    setImgEmpre(Ocio);
                    setSector("Ocio");
                } else if (localStorage.getItem("categoria") == '"Estatal"') {
                    setImgEmpre(Estatal);
                    setSector("Estatal");
                }
                else if (res[0].sector === "Supermercados") {
                    setImgEmpre(Compras);
                    setSector(res[0].sector);
                }
                else if (res[0].sector === "Sanidad") {
                    setImgEmpre(Sanidad);
                    setSector(res[0].sector);
                }
                else if (res[0].sector === "Banca") {
                    setImgEmpre(Euro);
                    setSector(res[0].sector);
                }
                else if (res[0].sector === "Telefonia") {
                    setImgEmpre(Telefono);
                    setSector(res[0].sector);
                }

                else {
                    setImgEmpre(Categoria);
                }
            }
            )
    }, []);

    function recogerId(id) {

        setEmpresasId(id);
        localStorage.setItem("idEmpresa", id);
        setTimeout(() => {
            window.location.assign("/empresa");



        }, 500);


    }










    return (
        <div className='Home'>
            <Nav />
            <h1 className="tituloCateg">Categoría</h1>
            <Search setEmpresa1={setEmpresa} setCategoria1={setCategoria} />
            <img src={Categoria} alt="Categoria" className="imgCategoria" />
            <div className="containerCateH">
            
            <img src={imgEmpresa} alt="Empresa" className="imgEmpresa" />
            <h1 className="tituloCategFal">{sector}</h1>
            </div>
            
            <div className="contenedorEmMast">
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
                }) : null

                }
            </div>

            <div className="contenedorEmMast ocultarCat">

                {categoria ?
                    categoria.map((categori, i) => {
                        return (
                            <div >

                                <div className="contenedorEmpresas">

                                    <div className="empresaTarjeta">
                                        <div className="tarjeta">
                                            <img variant="top" src={categori.logoUrl} className="imgEmpreMast" />
                                            <div className="contenedorRnakingEm">
                                                {categori.rating >= 2 ?
                                                    <div className="rankingEm">
                                                        <img src={RankingVer} alt="RankingVer" className="RankingVer" />
                                                        <h1 className="rankingEm1">{categori.rating}</h1>
                                                    </div>
                                                    : <div className="rankingEm">
                                                        <img src={RankingRed} alt="RankingRed" className="RankingRed" />
                                                        <h1 className="rankingEm1">{categori.rating}</h1>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="contenedorTarjeta1">
                                            <Card.Title onClick={() => recogerId(categori.id_empresa)} style={{
                                                fontFamily: 'Baloo Paaji 2',
                                                fontStyle: "normal",
                                                fontWeight: "700",
                                                fontSize: "24px",
                                                lineHeight: "40px"
                                            }}>{categori.nombre_empresa}</Card.Title>
                                            <Card.Text style={{
                                                fontFamily: 'Lato',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "14px",
                                                lineHeight: "2px"
                                            }}>
                                                {categori.sector}
                                            </Card.Text>
                                            <Card.Text style={{
                                                fontFamily: 'Lato',
                                                fontStyle: "normal",
                                                fontWeight: "400",
                                                fontSize: "14px",
                                                lineHeight: "22px;"
                                            }}>
                                                {categori.descripcion}
                                            </Card.Text>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })


                    : null
                }


            </div>


        </div>


    )
}

