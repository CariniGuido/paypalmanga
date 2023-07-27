import React from 'react';
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer>
        <div className={` ${styles.footer} d-flex justify-content-center align-items-center text-center  bg-dark text-white fs-4 `}>
                Made with ♥ by&nbsp;<a className='text-decoration-none' href="https://www.linkedin.com/in/carini-demarchi-9a886223b/" target="_blank" rel='noopener noreferrer'>Guido</a> 
        </div>
    </footer>
  )
}

export default Footer;