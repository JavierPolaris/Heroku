import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/img/logo.png';
import Header from '../assets/img/Header.png';
import UserL from '../assets/img/UserL.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


function OffcanvasExample() {


  const [user, setUser] = useState(false);


  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: localStorage.getItem("phone"),

      }),
      // body: localStorage.getItem('telefono')
    };
    fetch('navUser', requestOptions)
      .then(response => response.json())
      .then(data => {
        setUser(data); console.log(data)
      }
      )
      .catch(error => console.log('error', error));
  }, []);





  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <img src={Header} alt="Header" className="img-fluid" style={{
              width: "389px"
            }} />
            {/* <Navbar.Brand href="#"> <img src={Logo} alt="logo" className='logoNav' /> </Navbar.Brand> */}

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='faldonNav'
            >
              <Offcanvas.Header closeButton >
                <h1 className="tituloFaldon">Menú</h1>
              </Offcanvas.Header>
              <img src={UserL} alt="UserL" className="img-fluid1"/>
              {user ?

                <Offcanvas.Body>
                  
                  <h1 className='userNav'>{user.nombre} {user.apellidos}</h1>
                  <p className='userReseñas'>27 reseñas</p>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <div className="contenedotEtique">
                      <Nav.Link href="home" className='linkUser' style={{
                        marginTop: "159px"
                      }}>Inicio</Nav.Link>
                      <Nav.Link href="test" className='linkUser1' style={{
                        marginTop: "47px"
                      }}>Test</Nav.Link>
                      <Nav.Link href="home" className='linkUser2' style={{
                        marginTop: "47px"
                      }}>Ranking</Nav.Link>
                      <Nav.Link href="https://i.kym-cdn.com/photos/images/original/001/031/142/0b4.gif" className='linkUser3'
                      style={{
                        marginTop: "47px"
                      }}>Quiénes somos</Nav.Link>
                    </div>

                  </Nav>

                </Offcanvas.Body>

                : <h1 style={{
                  textAlign: "center",
                  marginTop: "300px",
                  color: "white"

                }}> "No hay usuario"</h1>}
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;