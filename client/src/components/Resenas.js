import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Categoria from '../assets/img/categoria.png';
import Linea1 from '../assets/img/Linea1.png';
import Linea2 from '../assets/img/Linea2.png';
import Linea3 from '../assets/img/Linea3.png';
import Linea4 from '../assets/img/Linea4.png';
import Linea5 from '../assets/img/Linea5.png';
import Visual from '../assets/img/Visual.png';
import Auditivo from '../assets/img/Auditivo.png';
import Congnitivo from '../assets/img/Congnitivo.png';
import Motor from '../assets/img/Motor.png';
import Tecnico from '../assets/img/Tecnico.png';
import FaceGreen from '../assets/img/faceGreen.png';
import FaceRed from '../assets/img/faceRed.png';
import FaceYel from '../assets/img/faceYel.png';
import FondoComent from '../assets/img/fondoComent.png';
import Linea from '../assets/img/linea.png';
import Flecha from '../assets/img/Flecha.png';
import RectaBody1 from '../assets/img/RectaBody1.png';
import RectaBody2 from '../assets/img/RectaBody2.png';
import GraciasImg from '../assets/img/Gracias.png';
import Feli from '../assets/img/contento.png';
import Regu from '../assets/img/regu.png';
import Trist from '../assets/img/trist.png';

export default function Resenas() {
    const [empresa2, setEmpresa2] = useState(null);
    const empresa = localStorage.getItem("idEmpresa");
    const [visual1, setVisual1] = useState("");
    const [visual2, setVisual2] = useState("");
    const [visual3, setVisual3] = useState("");
    const [auditivo1, setAuditivo1] = useState("");
    const [auditivo2, setAuditivo2] = useState("");
    const [auditivo3, setAuditivo3] = useState("");
    const [cognitivo1, setCognitivo1] = useState("");
    const [cognitivo2, setCognitivo2] = useState("");
    const [cognitivo3, setCognitivo3] = useState("");
    const [motor1, setMotor1] = useState("");
    const [motor2, setMotor2] = useState("");
    const [motor3, setMotor3] = useState("");
    const [tecnico1, setTecnico1] = useState("");
    const [tecnico2, setTecnico2] = useState("");
    const [tecnico3, setTecnico3] = useState("");
    const [descripcion, setDescripcion] = useState("");


    useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                empresa: empresa,
            }),
        };

        fetch("resenas", requestOptions)
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                setEmpresa2(res);
            }
            )
    }, [])

    function Gracias() {


        setDescripcion(document.querySelector('.inputComentario').value)
        console.log(document.querySelector('.inputComentario').value)



        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fk_usuario: localStorage.getItem("phone"),
                fk_empresa: localStorage.getItem("idEmpresa"),
                visual1: visual1,
                visual2: visual2,
                visual3: visual3,
                auditivo1: auditivo1,
                auditivo2: auditivo2,
                auditivo3: auditivo3,
                fisico1: motor1,
                fisico2: motor2,
                fisico3: motor3,
                cognitivo1: cognitivo1,
                cognitivo2: cognitivo2,
                cognitivo3: cognitivo3,
                tecnico1: tecnico1,
                tecnico2: tecnico2,
                tecnico3: tecnico3,
                descripcion: document.querySelector('.inputComentario').value
            }),
        };

        fetch('valorar', requestOptions)
            .then(res => res.json())
            .then((res) => {
                // setEmpresa(res); props.setEmpresa1(res);
                // console.log(res)

            })


        //ocultar textarea
        document.querySelector(".inputComentario").style.display = "none";
        document.querySelector(".preguntaTextFin").style.display = "none";
        document.querySelector(".botonComentario").style.display = "none";


        //mostrar gracias
        document.querySelector(".Gracias").style.display = "block";
        document.querySelector(".preguntaTextFin1").style.display = "block";
        document.querySelector(".botonComentario1").style.display = "block";

    }

    function Volver() {
        window.location.href = "/empresa";
    }


    function visualR1(valor) {
        console.log(valor)
        setVisual1(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed1").style.display = "none";
            document.querySelector(".FaceYel1").style.display = "block";
            document.querySelector(".FaceGreen1").style.display = "block";
            document.querySelector(".FaceYel1A").style.display = "none";
            document.querySelector(".FaceGreen1A").style.display = "none";
            document.querySelector(".FaceRed1A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel1").style.display = "none";
            document.querySelector(".FaceRed1").style.display = "block";
            document.querySelector(".FaceGreen1").style.display = "block";
            document.querySelector(".FaceRed1A").style.display = "none";
            document.querySelector(".FaceGreen1A").style.display = "none";
            document.querySelector(".FaceYel1A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen1").style.display = "none";
            document.querySelector(".FaceYel1").style.display = "block";
            document.querySelector(".FaceRed1").style.display = "block";
            document.querySelector(".FaceRed1A").style.display = "none";
            document.querySelector(".FaceYel1A").style.display = "none";
            document.querySelector(".FaceGreen1A").style.display = "block";
        }
    }
    function visualR2(valor) {
        console.log(valor)
        setVisual2(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed2").style.display = "none";
            document.querySelector(".FaceYel2").style.display = "block";
            document.querySelector(".FaceGreen2").style.display = "block";
            document.querySelector(".FaceYel2B").style.display = "none";
            document.querySelector(".FaceGeen2B").style.display = "none";
            document.querySelector(".FaceRed2B").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel2").style.display = "none";
            document.querySelector(".FaceRed2").style.display = "block";
            document.querySelector(".FaceGreen2").style.display = "block";
            document.querySelector(".FaceRed2B").style.display = "none";
            document.querySelector(".FaceGeen2B").style.display = "none";
            document.querySelector(".FaceYel2B").style.display = "block";
        } else {
            document.querySelector(".FaceGreen2").style.display = "none";
            document.querySelector(".FaceYel2").style.display = "block";
            document.querySelector(".FaceRed2").style.display = "block";
            document.querySelector(".FaceRed2B").style.display = "none";
            document.querySelector(".FaceYel2B").style.display = "none";
            document.querySelector(".FaceGeen2B").style.display = "block";
        }

    }
    function visualR3(valor) {
        console.log(valor)
        setVisual3(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed3").style.display = "none";
            document.querySelector(".FaceYel3").style.display = "block";
            document.querySelector(".FaceGreen3").style.display = "block";
            document.querySelector(".FaceYel3C").style.display = "none";
            document.querySelector(".FaceGreen3C").style.display = "none";
            document.querySelector(".FaceRed3C").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel3").style.display = "none";
            document.querySelector(".FaceRed3").style.display = "block";
            document.querySelector(".FaceGreen3").style.display = "block";
            document.querySelector(".FaceRed3C").style.display = "none";
            document.querySelector(".FaceGreen3C").style.display = "none";
            document.querySelector(".FaceYel3C").style.display = "block";
        } else {
            document.querySelector(".FaceGreen3").style.display = "none";
            document.querySelector(".FaceYel3").style.display = "block";
            document.querySelector(".FaceRed3").style.display = "block";
            document.querySelector(".FaceRed3C").style.display = "none";
            document.querySelector(".FaceYel3C").style.display = "none";
            document.querySelector(".FaceGreen3C").style.display = "block";
        }
    }
    function auditivoR1(valor) {
        console.log(valor)
        setAuditivo1(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed4").style.display = "none";
            document.querySelector(".FaceYel4").style.display = "block";
            document.querySelector(".FaceGreen4").style.display = "block";
            document.querySelector(".FaceYel4A").style.display = "none";
            document.querySelector(".FaceGreen4A").style.display = "none";
            document.querySelector(".FaceRed4A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel4").style.display = "none";
            document.querySelector(".FaceRed4").style.display = "block";
            document.querySelector(".FaceGreen4").style.display = "block";
            document.querySelector(".FaceRed4A").style.display = "none";
            document.querySelector(".FaceGreen4A").style.display = "none";
            document.querySelector(".FaceYel4A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen4").style.display = "none";
            document.querySelector(".FaceYel4").style.display = "block";
            document.querySelector(".FaceRed4").style.display = "block";
            document.querySelector(".FaceRed4A").style.display = "none";
            document.querySelector(".FaceYel4A").style.display = "none";
            document.querySelector(".FaceGreen4A").style.display = "block";
        }
    }
    function auditivoR2(valor) {
        console.log(valor)
        setAuditivo2(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed5").style.display = "none";
            document.querySelector(".FaceYel5").style.display = "block";
            document.querySelector(".FaceGreen5").style.display = "block";
            document.querySelector(".FaceYel5B").style.display = "none";
            document.querySelector(".FaceGreen5B").style.display = "none";
            document.querySelector(".FaceRed5B").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel5").style.display = "none";
            document.querySelector(".FaceRed5").style.display = "block";
            document.querySelector(".FaceGreen5").style.display = "block";
            document.querySelector(".FaceRed5B").style.display = "none";
            document.querySelector(".FaceGreen5B").style.display = "none";
            document.querySelector(".FaceYel5B").style.display = "block";
        } else {
            document.querySelector(".FaceGreen5").style.display = "none";
            document.querySelector(".FaceYel5").style.display = "block";
            document.querySelector(".FaceRed5").style.display = "block";
            document.querySelector(".FaceRed5B").style.display = "none";
            document.querySelector(".FaceYel5B").style.display = "none";
            document.querySelector(".FaceGreen5B").style.display = "block";
        }
    }
    function auditivoR3(valor) {
        console.log(valor)
        setAuditivo3(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed6").style.display = "none";
            document.querySelector(".FaceYel6").style.display = "block";
            document.querySelector(".FaceGreen6").style.display = "block";
            document.querySelector(".FaceYel6C").style.display = "none";
            document.querySelector(".FaceGreen6C").style.display = "none";
            document.querySelector(".FaceRed6C").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel6").style.display = "none";
            document.querySelector(".FaceRed6").style.display = "block";
            document.querySelector(".FaceGreen6").style.display = "block";
            document.querySelector(".FaceRed6C").style.display = "none";
            document.querySelector(".FaceGreen6C").style.display = "none";
            document.querySelector(".FaceYel6C").style.display = "block";
        } else {
            document.querySelector(".FaceGreen6").style.display = "none";
            document.querySelector(".FaceYel6").style.display = "block";
            document.querySelector(".FaceRed6").style.display = "block";
            document.querySelector(".FaceRed6C").style.display = "none";
            document.querySelector(".FaceYel6C").style.display = "none";
            document.querySelector(".FaceGreen6C").style.display = "block";
        }
    }
    function cognitivoR1(valor) {
        console.log(valor)
        setCognitivo1(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed7").style.display = "none";
            document.querySelector(".FaceYel7").style.display = "block";
            document.querySelector(".FaceGreen7").style.display = "block";
            document.querySelector(".FaceYel7A").style.display = "none";
            document.querySelector(".FaceGreen7A").style.display = "none";
            document.querySelector(".FaceRed7A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel7").style.display = "none";
            document.querySelector(".FaceRed7").style.display = "block";
            document.querySelector(".FaceGreen7").style.display = "block";
            document.querySelector(".FaceRed7A").style.display = "none";
            document.querySelector(".FaceGreen7A").style.display = "none";
            document.querySelector(".FaceYel7A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen7").style.display = "none";
            document.querySelector(".FaceYel7").style.display = "block";
            document.querySelector(".FaceRed7").style.display = "block";
            document.querySelector(".FaceRed7A").style.display = "none";
            document.querySelector(".FaceYel7A").style.display = "none";
            document.querySelector(".FaceGreen7A").style.display = "block";
        }
    }
    function cognitivoR2(valor) {
        console.log(valor)
        setCognitivo2(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed8").style.display = "none";
            document.querySelector(".FaceYel8").style.display = "block";
            document.querySelector(".FaceGreen8").style.display = "block";
            document.querySelector(".FaceYel8A").style.display = "none";
            document.querySelector(".FaceGreen8A").style.display = "none";
            document.querySelector(".FaceRed8A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel8").style.display = "none";
            document.querySelector(".FaceRed8").style.display = "block";
            document.querySelector(".FaceGreen8").style.display = "block";
            document.querySelector(".FaceRed8A").style.display = "none";
            document.querySelector(".FaceGreen8A").style.display = "none";
            document.querySelector(".FaceYel8A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen8").style.display = "none";
            document.querySelector(".FaceYel8").style.display = "block";
            document.querySelector(".FaceRed8").style.display = "block";
            document.querySelector(".FaceRed8A").style.display = "none";
            document.querySelector(".FaceYel8A").style.display = "none";
            document.querySelector(".FaceGreen8A").style.display = "block";
        }
    }
    function cognitivoR3(valor) {
        console.log(valor)
        setCognitivo3(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed9").style.display = "none";
            document.querySelector(".FaceYel9").style.display = "block";
            document.querySelector(".FaceGreen9").style.display = "block";
            document.querySelector(".FaceYel9A").style.display = "none";
            document.querySelector(".FaceGreen9A").style.display = "none";
            document.querySelector(".FaceRed9A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel9").style.display = "none";
            document.querySelector(".FaceRed9").style.display = "block";
            document.querySelector(".FaceGreen9").style.display = "block";
            document.querySelector(".FaceRed9A").style.display = "none";
            document.querySelector(".FaceGreen9A").style.display = "none";
            document.querySelector(".FaceYel9A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen9").style.display = "none";
            document.querySelector(".FaceYel9").style.display = "block";
            document.querySelector(".FaceRed9").style.display = "block";
            document.querySelector(".FaceRed9A").style.display = "none";
            document.querySelector(".FaceYel9A").style.display = "none";
            document.querySelector(".FaceGreen9A").style.display = "block";
        }
    }
    function motorR1(valor) {
        console.log(valor)
        setMotor1(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed10").style.display = "none";
            document.querySelector(".FaceYel10").style.display = "block";
            document.querySelector(".FaceGreen10").style.display = "block";
            document.querySelector(".FaceYel10A").style.display = "none";
            document.querySelector(".FaceGreen10A").style.display = "none";
            document.querySelector(".FaceRed10A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel10").style.display = "none";
            document.querySelector(".FaceRed10").style.display = "block";
            document.querySelector(".FaceGreen10").style.display = "block";
            document.querySelector(".FaceRed10A").style.display = "none";
            document.querySelector(".FaceGreen10A").style.display = "none";
            document.querySelector(".FaceYel10A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen10").style.display = "none";
            document.querySelector(".FaceYel10").style.display = "block";
            document.querySelector(".FaceRed10").style.display = "block";
            document.querySelector(".FaceRed10A").style.display = "none";
            document.querySelector(".FaceYel10A").style.display = "none";
            document.querySelector(".FaceGreen10A").style.display = "block";
        }
    }
    function motorR2(valor) {
        console.log(valor)
        setMotor2(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed11").style.display = "none";
            document.querySelector(".FaceYel11").style.display = "block";
            document.querySelector(".FaceGreen11").style.display = "block";
            document.querySelector(".FaceYel11A").style.display = "none";
            document.querySelector(".FaceGreen11A").style.display = "none";
            document.querySelector(".FaceRed11A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel11").style.display = "none";
            document.querySelector(".FaceRed11").style.display = "block";
            document.querySelector(".FaceGreen11").style.display = "block";
            document.querySelector(".FaceRed11A").style.display = "none";
            document.querySelector(".FaceGreen11A").style.display = "none";
            document.querySelector(".FaceYel11A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen11").style.display = "none";
            document.querySelector(".FaceYel11").style.display = "block";
            document.querySelector(".FaceRed11").style.display = "block";
            document.querySelector(".FaceRed11A").style.display = "none";
            document.querySelector(".FaceYel11A").style.display = "none";
            document.querySelector(".FaceGreen11A").style.display = "block";
        }
    }
    function motorR3(valor) {
        console.log(valor)
        setMotor3(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed12").style.display = "none";
            document.querySelector(".FaceYel12").style.display = "block";
            document.querySelector(".FaceGreen12").style.display = "block";
            document.querySelector(".FaceYel12A").style.display = "none";
            document.querySelector(".FaceGreen12A").style.display = "none";
            document.querySelector(".FaceRed12A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel12").style.display = "none";
            document.querySelector(".FaceRed12").style.display = "block";
            document.querySelector(".FaceGreen12").style.display = "block";
            document.querySelector(".FaceRed12A").style.display = "none";
            document.querySelector(".FaceGreen12A").style.display = "none";
            document.querySelector(".FaceYel12A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen12").style.display = "none";
            document.querySelector(".FaceYel12").style.display = "block";
            document.querySelector(".FaceRed12").style.display = "block";
            document.querySelector(".FaceRed12A").style.display = "none";
            document.querySelector(".FaceYel12A").style.display = "none";
            document.querySelector(".FaceGreen12A").style.display = "block";
        }
    }
    function tecnicoR1(valor) {
        console.log(valor)
        setTecnico1(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed13").style.display = "none";
            document.querySelector(".FaceYel13").style.display = "block";
            document.querySelector(".FaceGreen13").style.display = "block";
            document.querySelector(".FaceYel13A").style.display = "none";
            document.querySelector(".FaceGreen13A").style.display = "none";
            document.querySelector(".FaceRed13A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel13").style.display = "none";
            document.querySelector(".FaceRed13").style.display = "block";
            document.querySelector(".FaceGreen13").style.display = "block";
            document.querySelector(".FaceRed13A").style.display = "none";
            document.querySelector(".FaceGreen13A").style.display = "none";
            document.querySelector(".FaceYel13A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen13").style.display = "none";
            document.querySelector(".FaceYel13").style.display = "block";
            document.querySelector(".FaceRed13").style.display = "block";
            document.querySelector(".FaceRed13A").style.display = "none";
            document.querySelector(".FaceYel13A").style.display = "none";
            document.querySelector(".FaceGreen13A").style.display = "block";
        }
    }
    function tecnicoR2(valor) {
        console.log(valor)
        setTecnico2(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed14").style.display = "none";
            document.querySelector(".FaceYel14").style.display = "block";
            document.querySelector(".FaceGreen14").style.display = "block";
            document.querySelector(".FaceYel14A").style.display = "none";
            document.querySelector(".FaceGreen14A").style.display = "none";
            document.querySelector(".FaceRed14A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel14").style.display = "none";
            document.querySelector(".FaceRed14").style.display = "block";
            document.querySelector(".FaceGreen14").style.display = "block";
            document.querySelector(".FaceRed14A").style.display = "none";
            document.querySelector(".FaceGreen14A").style.display = "none";
            document.querySelector(".FaceYel14A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen14").style.display = "none";
            document.querySelector(".FaceYel14").style.display = "block";
            document.querySelector(".FaceRed14").style.display = "block";
            document.querySelector(".FaceRed14A").style.display = "none";
            document.querySelector(".FaceYel14A").style.display = "none";
            document.querySelector(".FaceGreen14A").style.display = "block";
        }
    }
    function tecnicoR3(valor) {
        console.log(valor)
        setTecnico3(valor)
        if (valor == "1") {
            document.querySelector(".FaceRed15").style.display = "none";
            document.querySelector(".FaceYel15").style.display = "block";
            document.querySelector(".FaceGreen15").style.display = "block";
            document.querySelector(".FaceYel15A").style.display = "none";
            document.querySelector(".FaceGreen15A").style.display = "none";
            document.querySelector(".FaceRed15A").style.display = "block";
        } else if (valor == "2") {
            document.querySelector(".FaceYel15").style.display = "none";
            document.querySelector(".FaceRed15").style.display = "block";
            document.querySelector(".FaceGreen15").style.display = "block";
            document.querySelector(".FaceRed15A").style.display = "none";
            document.querySelector(".FaceGreen15A").style.display = "none";
            document.querySelector(".FaceYel15A").style.display = "block";
        } else {
            document.querySelector(".FaceGreen15").style.display = "none";
            document.querySelector(".FaceYel15").style.display = "block";
            document.querySelector(".FaceRed15").style.display = "block";
            document.querySelector(".FaceRed15A").style.display = "none";
            document.querySelector(".FaceYel15A").style.display = "none";
            document.querySelector(".FaceGreen15A").style.display = "block";
        }
        
    }








    return (
        <div className="Resenas">
            <div className="containerResenas">
                {empresa2 ?
                    <div className="titleEmpresa">
                        <img src={empresa2.logoUrl} alt="logo" className="logoEmpresa1" />
                        <h1 className="tituloEmpresa">{empresa2.nombre_empresa}</h1>
                    </div>
                    : <p>Cargando...</p>}
                {empresa2 ?
                    <div className='TestCom'>
                        <div className='snap-center Test1'>
                            <div className="barraBack"></div>
                            <div className="barraFron1"></div>
                            <img src={Linea1} alt="Linea1" className="Linea1" />

                            <div className="cabeceraResenas">
                                <img src={Categoria} alt="Categoria" className="Categoria" style={{ width: "390px" }} />
                                <div className="containerTitulo">
                                    <img src={Visual} alt="Visual" className="Visual" />
                                    <h1 className="tituloResenas">Visual</h1>
                                </div>
                            </div>
                            <div className="preguntas">
                                <div className="pregunta1">
                                    <h1 className="preguntaText1">Los textos se leen fácilmente</h1>
                                    <div className="containerCaritas1">
                                        <div className="carita1">


                                            <button className="carita1Boton" onClick={() => visualR1("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed1A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed1" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />

                                            </button>
                                            <button className="carita1Boton" onClick={() => visualR1("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel1A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel1" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => visualR1("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen1A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen1" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta2">
                                    <h1 className="preguntaText1">Los colores de la página facilitan la lectura</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => visualR2("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed2B" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed2" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => visualR2("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel2B" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel2" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => visualR2("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGeen2B" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen2" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta3">
                                    <h1 className="preguntaText1">La infromación se percibe adecuadamente</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => visualR3("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed3C" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed3" />
                                            </button>
                                            <button className="carita1Boton" onClick={() => visualR3("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel3C" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel3" />
                                            </button>

                                            <button className="carita1Boton" onClick={() => visualR3("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen3C" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen3" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                    <div className="containerFlecha1">
                                        <p className="desliza">Desliza para ver más</p>
                                        <img src={Flecha} alt="Flecha" className="Flecha3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='snap-center Test2'>
                            <div className="barraBack"></div>
                            <div className="barraFron1"></div>
                            <img src={Linea2} alt="Linea1" className="Linea1" />

                            <div className="cabeceraResenas">
                                <img src={Categoria} alt="Categoria" className="Categoria" style={{ width: "390px" }} />
                                <div className="containerTitulo">
                                    <img src={Auditivo} alt="Visual" className="Visual" />
                                    <h1 className="tituloResenas">Auditivo</h1>
                                </div>
                            </div>
                            <div className="preguntas">
                                <div className="pregunta1">
                                    <h1 className="preguntaText1">Existen explicaciones por voz</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => auditivoR1("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed4A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />

                                                <img src={FaceRed} alt="FaceYel" className="FaceRed4" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => auditivoR1("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel4A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel4" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => auditivoR1("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen4A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen4" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta2">
                                    <h1 className="preguntaText1">Se puede regular el volumen</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => auditivoR2("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed5B" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />

                                                <img src={FaceRed} alt="FaceYel" className="FaceRed5" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => auditivoR2("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel5B" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel5" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => auditivoR2("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen5B" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen5" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta3">
                                    <h1 className="preguntaText1">El regulador de volumen es identificable</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => auditivoR3("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed6C" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed6" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => auditivoR3("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel6C" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel6" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => auditivoR3("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen6C" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen6" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                    <div className="containerFlecha">
                                        <img src={Flecha} alt="Flecha" className="Flecha2" />
                                        <img src={Flecha} alt="Flecha" className="Flecha1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='snap-center Test3'>
                            <div className="barraBack"></div>
                            <div className="barraFron1"></div>
                            <img src={Linea3} alt="Linea1" className="Linea1" />

                            <div className="cabeceraResenas">
                                <img src={Categoria} alt="Categoria" className="Categoria" style={{ width: "390px" }} />
                                <div className="containerTitulo">
                                    <img src={Congnitivo} alt="Visual" className="Visual" />
                                    <h1 className="tituloResenas">Cognitivo</h1>
                                </div>
                            </div>
                            <div className="preguntas">
                                <div className="pregunta1">
                                    <h1 className="preguntaText1">Pude encontrar lo que buscaba</h1>
                                    <div className="containerCaritas1">

                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => cognitivoR1("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed7A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed7" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => cognitivoR1("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel7A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel7" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => cognitivoR1("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen7A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen7" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta2">
                                    <h1 className="preguntaText1">La información es clara y concisa</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => cognitivoR2("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed8A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed8" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => cognitivoR2("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel8A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel8" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => cognitivoR2("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen8A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen8" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta3">
                                    <h1 className="preguntaText1">El regulador de volumen es identificable</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => cognitivoR3("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed9A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed9" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => cognitivoR3("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel9A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel9" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => cognitivoR3("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen9A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen9" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                    <div className="containerFlecha">
                                        <img src={Flecha} alt="Flecha" className="Flecha2" />
                                        <img src={Flecha} alt="Flecha" className="Flecha1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='snap-center Test4'>
                            <div className="barraBack"></div>
                            <div className="barraFron1"></div>
                            <img src={Linea4} alt="Linea1" className="Linea1" />

                            <div className="cabeceraResenas">
                                <img src={Categoria} alt="Categoria" className="Categoria" style={{ width: "390px" }} />
                                <div className="containerTitulo">
                                    <img src={Motor} alt="Visual" className="Visual" />
                                    <h1 className="tituloResenas">Motor</h1>
                                </div>
                            </div>
                            <div className="preguntas">
                                <div className="pregunta1">
                                    <h1 className="preguntaText1">Se puede acceder al contenido a través de un teclado</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => motorR1("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed10A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed10" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => motorR1("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel10A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel10" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => motorR1("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen10A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen10" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta2">
                                    <h1 className="preguntaText1">Los botones y enlaces son fáciles de utilizar</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => motorR2("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed11A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed11" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => motorR2("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel11A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel11" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => motorR2("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen11A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen11" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta3">
                                    <h1 className="preguntaText1">Se puede interactuar con el dispositivo sin molestias</h1>
                                    <div className="containerCaritas1">

                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => motorR3("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed12A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed12" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => motorR3("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel12A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel12" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => motorR3("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen12A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen12" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                    <div className="containerFlecha">
                                        <img src={Flecha} alt="Flecha" className="Flecha2" />
                                        <img src={Flecha} alt="Flecha" className="Flecha1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='snap-center Test5'>
                            <div className="barraBack"></div>
                            <div className="barraFron1"></div>
                            <img src={Linea5} alt="Linea1" className="Linea1" />

                            <div className="cabeceraResenas">
                                <img src={Categoria} alt="Categoria" className="Categoria" style={{ width: "390px" }} />
                                <div className="containerTitulo">
                                    <img src={Tecnico} alt="Visual" className="Visual" />
                                    <h1 className="tituloResenas">Técnico</h1>
                                </div>
                            </div>
                            <div className="preguntas">
                                <div className="pregunta1">
                                    <h1 className="preguntaText1">La página ha funcionado correctamente</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => tecnicoR1("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed13A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed13" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => tecnicoR1("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel13A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel13" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => tecnicoR1("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen13A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen13" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta2">
                                    <h1 className="preguntaText1">Pude navegar sin abrir otras ventanas o pestañas</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => tecnicoR2("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed14A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceRed} alt="FaceYel" className="FaceRed14" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => tecnicoR2("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel14A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel14" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => tecnicoR2("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen14A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen14" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                </div>
                                <div className="pregunta3">
                                    <h1 className="preguntaText1">La velocidad de desplazamiento horizontal es adecuada</h1>
                                    <div className="containerCaritas1">


                                        <div className="carita1">

                                            <button className="carita1Boton" onClick={() => tecnicoR3("1")}>
                                                <img src={Trist} alt="Trist" className="FaceRed15A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />

                                                <img src={FaceRed} alt="FaceYel" className="FaceRed15" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>
                                            <button className="carita1Boton" onClick={() => tecnicoR3("2")}>
                                                <img src={Regu} alt="Regu" className="FaceYel15A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceYel} alt="FaceRed" className="FaceYel15" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />
                                            </button>

                                            <button className="carita1Boton" onClick={() => tecnicoR3("3")}>
                                                <img src={Feli} alt="Feli" className="FaceGreen15A" style={{
                                                    width: "56px",
                                                    display: "none"
                                                }} />
                                                <img src={FaceGreen} alt="FaceGreen" className="FaceGreen15" style={{
                                                    width: "56px",
                                                    display: "inline"
                                                }} />


                                            </button>

                                        </div>
                                        <img src={FondoComent} alt="FondoComent" className="FondoComent1" />
                                        <img src={Linea} alt="Linea" className="Linea" />
                                    </div>
                                    <div className="containerFlecha">
                                        <img src={Flecha} alt="Flecha" className="Flecha2" />
                                        <img src={Flecha} alt="Flecha" className="Flecha1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='snap-center Test6'>
                            <div className="ComentarioText">
                                <h1 className="preguntaTextFin" style={{ display: "inline" }}>Tus comentarios ayudan a mejorar la accesibilidad</h1>
                                <h1 className="preguntaTextFin1" style={{ display: "none" }}>¡Muchas gracias<br></br> por tu reseña!</h1>
                                <textarea className="inputComentario" placeholder="Escribe tus comentarios..." />
                                <img src={GraciasImg} alt="Gracias" className="Gracias" />
                                <button className="botonComentario" onClick={() => Gracias()}>ENVIAR</button>
                                <button className="botonComentario1" onClick={() => Volver()}>VER RESEÑA</button>
                            </div>
                            <div className="backGText">
                                <img src={RectaBody1} alt="RectaBody1" className="RectaBody1A" />
                                <img src={RectaBody2} alt="RectaBody2" className="RectaBody2A" />
                            </div>
                        </div>
                    </div>
                    : <div></div>}
            </div>

        </div>
    )
}