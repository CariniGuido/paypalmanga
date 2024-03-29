import React from 'react';
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";

/* Tarjeta de items  */

const Item = ({ producto }) => {
  return (
               <div className='card mt-5 d-flex flex-column justify-content-center align-items-center position-relative' >
                <img src={producto.img}  alt="" />
                <h4 className='mt-2'>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>{

                producto.stock === 0 ?
                 <>
                 <button className='btn btn-danger disabled'>No hay stock disponible</button>
                </>
                : <p>Stock: {producto.stock}</p> 
                }</p>
                <Link className='btn btn-primary my-2' to={`/item/${producto.id}`}>Ver más</Link>  

                {(() =>{
                  if(producto.categoria === "Remeras"){
                    return(
                      <div className={`${styles.badge} badge bg-danger position-absolute`}>{producto.categoria}</div>
                    )

                  } else if(producto.categoria === "Pantalones"){
                    return (
                    <div className={`${styles.badge} badge bg-primary position-absolute`}>{producto.categoria}</div>)
                  } else{
                    return(
                    <div className={`${styles.badge} badge bg-success position-absolute`}>{producto.categoria}</div>)
                  }
                })()}
      
              </div>
  )
}

export default Item;