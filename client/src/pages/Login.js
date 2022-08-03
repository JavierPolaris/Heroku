import Nav from '../components/Nav';
import Wasap from '../assets/img/Wasap.png';
import WasapLo from '../assets/img/logoWasap.png';
import Header from '../assets/img/Header.png';
import Rectangle1 from '../assets/img/Rectangle1.png';
import Tiks from '../assets/img/tiks.png';
import React, { useEffect, useState } from 'react';

export default function Login() {
    const [telefono, setTelefono] = useState("")





    function handleClick() {
        window.location.href = '/registro';
    }

    function handleClick1() {
        document.querySelector('.pop').style.display = 'block';
    }
    function handleClick2() {
        //console.log(telefono)
        localStorage.setItem("phone", telefono);
        let respuesta = { telefono: telefono}
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ respuesta }),
        };
        //console.log(respuesta)
        fetch("login", requestOptions)
          .then((response) => response.json())
          .then((res) => {
            console.log(res.message);
          });



        document.querySelector('.pop1').style.display = 'block';

    }

    return (
        <>
            <div className="containerNav">
                <img src={Header} alt="header" className='header' style={{
                    width: "389px"
                }} />
                <h1 className="tituloLog">Acceso</h1>
            </div>
            <div className="containerLog">
                <div className="containerLogReg">
                    <h1 className='h1Log'>Ya tengo cuenta</h1>
                    <button className="botonLogLogin" onClick={() => handleClick1()}>
                        <img src={Wasap} alt="Wasap" className="imgLog" />
                        ENTRAR
                    </button>

                </div>
                <img src={Rectangle1} alt="rectangulo" className='rectangulo1Log' />
                <h1 className='h1Log2'>No tengo cuenta</h1>
                <button className="botonLogRe" onClick={() => handleClick()}>REGÍSTRARTE</button>

                <p className='pLog'> Acceso para empresas</p>
            </div>
            <div className="pop">
                <div className="containerPopBac">
                    <div className="containerPop">
                        <div className="containerPop2">
                            <img src={WasapLo} alt="Wasap" className="imgPop" style={{
                                    position: "absolute",
                                    width: "126px",
                                    height: "127px",
                                    left: "76px",
                                    top: "-90px"
                            }} />
                            <p className='popText'>Accede a través <br></br>de Whatsapp</p>
                        </div>
                        <div className="containerPop3L">
                            <p className='popText1'>Nº de teléfono móvil</p>
                            <input type="text" className="inputPop" placeholder='+34' onChange={(e) => setTelefono(e.target.value)}/>
                        </div>

                        <button className="botonPop" onClick={() => handleClick2()}
                        >ENVIAR</button>

                    </div>
                </div>
            </div>
            <div className="pop1">
                <div className="containerPopBac">
                    <div className="containerPop">
                        <div className="containerPop2">
                            <img src={Tiks} alt="Wasap" className="imgPop" style={{
                                position: "absolute",
                                width: "113px",
                                left: "82px",
                                top: "-81px"
                            }} />
                            <p className='popTextRe'>Enlace de acceso enviado a tu Whatsapp</p>
                        </div>
                        <div className="containerPop3">
                            <p className='popTextRe1'>Revísalo para acceder a tu perfil</p>
                            
                           
                        </div>
                        <p className='popTextRe2'>¿No lo has recibido?</p>
                        <button className="botonPop">REENVIAR</button>

                    </div>
                </div>
            </div>
        </>
    )

}