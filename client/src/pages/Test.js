import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Resenas from '../components/Resenas';    


export default function Test() {


    return (
        <div className="Test">
            <Nav />
            <h1 className="tituloLog">Reseña</h1>
            <Resenas />
            
        </div>
    )
}