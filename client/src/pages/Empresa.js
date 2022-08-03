import React, { useEffect, useState, useRef } from 'react';
import Flecha from '../assets/img/Flecha.png';

import Compartir from '../assets/img/compartir.png';
import RankingRed from '../assets/img/rankingRed.png';
import RankingVer from '../assets/img/rankingVer.png';
import FaceGreen from '../assets/img/faceGreen.png';
import FaceRed from '../assets/img/faceRed.png';
import FaceYel from '../assets/img/faceYel.png';
import FondoComent from '../assets/img/fondoComent.png';



export default function Empresa() {
    const [empresa2, setEmpresa2] = useState(null);
    const [reseñasEmpresa, setReseñasEmpresa] = useState(null);


    useEffect(() => {

        // const handleClick = event => {
        //     console.log('Button clicked');
        //     if (navigator.share) {
        //         navigator.share({
        //             title: 'Web Share API Draft',
        //             text: 'Take a look at this spec!',
        //             url: 'https://wicg.github.io/web-share/#share-method',
        //           })
        //           .then(() => console.log('Successful share'))
        //           .catch((error) => console.log('Error sharing', error));
        //       } else {
        //         console.log('Share not supported on this browser, do it the old way.');
        //       }
        // };
        // const element = ref.current;
        // element.addEventListener('click', handleClick);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                empresa: localStorage.getItem("idEmpresa"),
            }),
        };


        fetch("empresa", requestOptions)
            .then((response) => response.json())
            .then((res) => {

                setEmpresa2(res.empresa1);

                setReseñasEmpresa(res.resenas);
                


            }
            )
    }, [])


    // function share() {

    //     const shareData = {
    //         title: 'MDN',
    //         text: 'Learn web development on MDN!',
    //         url: 'https://developer.mozilla.org'
    //     }
    //     const btn = document.querySelector('.button');
    //     const resultPara = document.querySelector('.result');
    //     btn.addEventListener('click', async () => {
    //         try {
    //             await navigator.share(shareData)
    //             resultPara.textContent = 'MDN shared successfully'
    //         } catch (err) {
    //             resultPara.textContent = `Error: ${err}`
    //         }
    //     });

    //     navigator.share({
    //         title: `Prueba`,
    //     })
    //         .then(() => {
    //             console.log('Thanks for sharing')
    //         })
    //         .catch(console.error)
    // }




    function refrBack() {
        window.history.back();



    }
    function btnReseñar() {
        localStorage.setItem("idEmpresa", empresa2.id_empresa);
        window.location.href = "/test";
    }

    return (
        <div className="Empresa">
            <img src={Flecha} alt="Flecha" className="Flecha" onClick={() => refrBack()} />



            {/* <div classname="container"></div>
<div classname="overlay"></div>
        <div classname="share">
            <button onClick={()=>share()}>Compartir</button>
        </div> */}
            {/* <input type="button" className="inputRegistroBut femenino" value="Share" onClick={() => share()} /> */}
            {/* <button ref={ref}>Click</button> */}



            {empresa2 ?
                <div>
                    <div className="EmpresaFondo">
                    <img src={empresa2.logoCorp} alt="logo" className="logoCorp" />
                    </div>
                    <div className="containerTitelEm">
                        <img src={empresa2.logoUrl} alt="logo" className="logoEmpresa" />
                        <h1 className="tituloEmpresa">{empresa2.nombre_empresa}</h1>
                    </div>

                    <div className="containerDescripcion">
                        <p className="descripcionEmpresa">{empresa2.descripcion}</p>
                    </div>
                    <div className="containerTextoEm">
                        <h1 className="nivelDeEmpresa">Nivel de accesibilidad</h1>
                        <img src={Compartir} alt="compartir" className="compartir" />
                    </div>
                    {empresa2.rating >= 2 ?
                        <div className="containerRanking">
                            <img src={RankingVer} alt="ranking" className="ranking" />
                            <h1 className="rankingText">{empresa2.rating}</h1>
                        </div> :
                        <div className="containerRanking">
                            <img src={RankingRed} alt="ranking" className="ranking" />
                            <h1 className="rankingText">{empresa2.rating}</h1>
                        </div>
                    }
                    <h2 className="resenas">Reseñas de otros usuarios</h2>
                    <div className="containerComentarios">
                        {reseñasEmpresa ? reseñasEmpresa.map((resena, i) => (
                            <div className="containerResena" key={i}>

                                {resena.valoracion >= 2.3 ?
                                    <div className="containerResenaImg">
                                        <img src={FondoComent} alt="fondoComent" className="fondoComent" />
                                        <img src={FaceGreen} alt="face" className="face" />
                                        <p className="faceText">{resena.valoracion}</p>
                                    </div>
                                    :
                                    resena.valoracion >= 1.3 && resena.valoracion < 2.3 ?
                                        <div className="containerResenaImg">
                                            <img src={FondoComent} alt="fondoComent" className="fondoComent" />
                                            <img src={FaceYel} alt="face" className="face" />
                                            <p className="faceText">{resena.valoracion}</p>
                                        </div>
                                        :
                                        <div className="containerResenaImg">
                                            <img src={FondoComent} alt="fondoComent" className="fondoComent" />
                                            <img src={FaceRed} alt="face" className="face" />
                                            <p className="faceText">{resena.valoracion}</p>
                                        </div>
                                }
                                <div className="containerResenaText">
                                    <h1 className="resenaNombre">{resena.nombre}</h1>
                                    <p className="resenaText">{resena.resena}</p>

                                </div>


                            </div>
                        )



                        ) : <p></p>}
                    </div>
                    <button onClick={()=>btnReseñar()} className="btnComentar">RESEÑAR</button>

                </div>
                : <h1></h1>
            }
        </div>
    )




}