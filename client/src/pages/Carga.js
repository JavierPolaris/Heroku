import React from 'react'
import Logo from '../assets/img/logo.png'
import Rectangulo2 from '../assets/img/Rectangle2.png'
import Rectangulo1 from '../assets/img/Rectangle1.png'
import Polygon1 from '../assets/img/Polygon1.png'


const Carga = () => {

    setTimeout(() => {
        window.location.href = '/login'
    }
    , 3000)


    return (
        <div>
            <div className="containerHome">   
            <img src={Logo} alt="logo" className='logoHome'/>
            <div className="spinner spinner--steps icon-spinner"style={{
                position: 'relative',
                top: '387px',
                left: '-84px',
            }}  aria-hidden="true"></div>
            
            </div>
            <div className="containerBack">
                <img src={Rectangulo2} alt="rectangulo" className='rectangulo2'/>
                <img src={Rectangulo1} alt="rectangulo" className='rectangulo1'/>
                <img src={Polygon1} alt="polygon" className='polygon1'/>
                </div>
        </div>
        

    )
    }
export default Carga;
