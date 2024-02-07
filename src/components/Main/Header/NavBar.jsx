import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../assets/img/Mangadiction-logo.png";
import CartWidget from './CartWidget';
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { app } from "../../../firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";





const NavBar = () =>
{
  
  const auth = getAuth(app); 

  return (
    <>
    <Navbar expland="lg" className={styles.navStyle} fixed="top" bg="dark" variant="dark" >
      <Container fluid className={` d-flex justify-content-around ${styles.marginbrand} `} >
        <Link className='text-decoration-none text-white fs-6 d-flex flex-column align-items-center ' to="/" >
          <img className={styles.img} src={logo} alt="" /> 
          <cite className="border-t-4 shadow" style={{ boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)' }}>
    Moda Luna
</cite>



    

        </Link>
        <Nav className={`${styles.navLinks}`}>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="categorias/Remeras" className='nav-link'>Remeras</Link>
          <Link to="categorias/Camperas&Buzos" className='nav-link'>Camperas & Buzos</Link>
          <Link to="categorias/Pantalones" className='nav-link'>Pantalones</Link>
        </Nav>
          <CartWidget />
            <button className={`  btn btn-danger ${styles.logout}`} onClick={()=> signOut(auth)}>Log-Out</button>  
      </Container>
    </Navbar>
      <div className={`${styles.navbarSecondary} `}>
          <Link to="/" className='nav-link mx-2'>Home</Link>
          <Link to="categorias/Remeras" className='nav-link mx-2'>Remeras</Link>
          <Link to="categorias/Camperas&Buzos" className='nav-link mx-2'>Camperas & Buzos</Link>
          <Link to="categorias/Pantalones" className='nav-link mx-2'>Pantalones</Link>
      </div>

      </>
  )
}

export default NavBar;