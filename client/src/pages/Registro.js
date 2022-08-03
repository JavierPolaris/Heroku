import Header from '../assets/img/Header.png';
import Rectangle1 from '../assets/img/Rectangle1.png';
import Tiks from '../assets/img/tiks.png'; 
import React, { useEffect, useState } from 'react';




export default function Registro() {



    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("")
    const [genero, setGenero] = useState("");
    const [edad, setEdad] = useState("")
    const [telefono, setTelefono] = useState("")
    const [conocimiento, setConocimiento] = useState("")


    useEffect(() => {
        console.log(genero);
    }, [genero]);

    const sendData = () => {

          localStorage.setItem("phone", telefono);


        let respuesta = {nombre: nombre, apellidos: apellidos, genero: genero, edad: edad, telefono: telefono, conocimiento: conocimiento}
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ respuesta }),
        };
        //console.log(respuesta)
        fetch("register", requestOptions)
          .then((response) => response.json())
          .then((res) => {
            console.log(res.message);
          });
          

          window.location.href = "/home";

      };






    function handleClick() {
        document.querySelector('.imgPop1').style.display = 'block';
        document.querySelector('.imgPop2').style.display = 'none';
        document.querySelector('.imgPop3').style.display = 'none';
        setConocimiento(document.querySelector('.bajo').value)
    }

    function handleClick1() {
        document.querySelector('.imgPop2').style.display = 'block';
        document.querySelector('.imgPop1').style.display = 'none';
        document.querySelector('.imgPop3').style.display = 'none';
        setConocimiento(document.querySelector('.medio').value)
    }
    function handleClick2() {
        document.querySelector('.imgPop3').style.display = 'block';
        document.querySelector('.imgPop2').style.display = 'none';
        document.querySelector('.imgPop1').style.display = 'none';
        setConocimiento(document.querySelector('.alto').value)
    }
    function handleClick3() {
        document.querySelector('.imgPop4').style.display = 'block';
        document.querySelector('.imgPop5').style.display = 'none';
        setGenero(document.querySelector('.femenino').value)

    }
    function handleClick4() {
        document.querySelector('.imgPop5').style.display = 'block';
        document.querySelector('.imgPop4').style.display = 'none';
        setGenero(document.querySelector('.masculino').value)

    }

    return (
        <>
        <div className="containerNav">
                <img src={Header} alt="header" className='header' style={{
                    width: "389px"
                }} />
                <h1 className="tituloLog">Registro</h1>
            </div>
            
            <div className="containerRegistro" style={{
                position: "relative",
                top:" -9px"
            }}>


                <form className="formRegistro">
                    <div className="formRegistro2">
                        <label className="labelRegistro">Nombre</label>
                        <input type="text" className="inputRegistro" placeholder='Inserte nombre' onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="formRegistro2">
                        <label className="labelRegistro">Apellido</label>
                        <input type="text" className="inputRegistro" placeholder='Inserte apellidos'onChange={(e) => setApellidos(e.target.value)}/>
                    </div>
                    <div className="formRegistro2">
                        <label className="labelRegistro">Género</label>
                        <div className="inputSexo">

                        <img src={Tiks} alt="Wasap" className="imgPop4" style={{
                                display: "none",
                                position: "absolute",
                                width: "21px",
                                left: "152px",
                                top: "280px"
                            }} />  
                        <input type="button" className="inputRegistroBut femenino" value="FEMENINO" onClick={() => handleClick3()} />
                        <img src={Tiks} alt="Wasap" className="imgPop5" style={{
                                display: "none",
                                position: "absolute",
                                width: "21px",
                                left: "336px",
                                top: "280px",
                                zIndex: "1"
                            }} /> 
                        <input type="button" className="inputRegistroBut masculino" value="MASCULINO" 
                        onClick={() => handleClick4()}/>

                        </div>
                    </div>
                    <div className="formRegistroEdad">
                    <div className="formRegistro2">
                        <label className="labelRegistro">Edad</label>
                        <input type="text" className="inputRegistroEd" placeholder='Años' onChange={(e) => setEdad(e.target.value)}/>
                    </div>
                    <div className="formRegistro2">
                        <label className="labelRegistro">Número de teléfono móvil</label>
                        <input type="text" className="inputRegistroPho"  placeholder='+34' onChange={(e) => setTelefono(e.target.value)}/>
                    </div>
                    </div>
                    <div className="formRegistro2">
                        <label className="labelRegistro">Nivel de conocimientos digitales</label>
                        <div className="inputCono">

                        <img src={Tiks} alt="Wasap" className="imgPop1" style={{
                                display: "none",
                                position: "absolute",
                                width: "21px",
                                left: "98px",
                                top: "516px"
                            }} />  
                        <input type="button" className="inputRegistroButC bajo" value="BAJO" onClick={() => handleClick()} />
                        <img src={Tiks} alt="Wasap" className="imgPop2" style={{
                                display: "none",
                                position: "absolute",
                                width: "21px",
                                left: "216px",
                                top: "516px"
                            }} />
                        <input type="button" className="inputRegistroButC medio" value="MEDIO" onClick={() => handleClick1()} />
                        <img src={Tiks} alt="Wasap" className="imgPop3" style={{
                                display: "none",
                                position: "absolute",
                                width: "21px",
                                left: "335px",
                                top: "516px"
                            }} />
                        <input type="button" className="inputRegistroButC alto" value="ALTO" onClick={() => handleClick2()} />

                        </div>
                    </div>

                </form>

                <button className="botonRegistro" onClick={() => sendData()}>CREAR PERFIL</button>


            </div>

        </>
    )

}