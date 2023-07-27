import React, {useRef} from 'react'
import styles from "./Checkout.module.scss";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const CheckoutView = ({ handleInputChange, values, handleSubmit, cartTotal}) => {

  const formRef = useRef();
  const paypalOptions = {
    "client-id": "ARN75lO36tmOvyaYJTLT90sb-JJjdkT7zwzEcxYuLRXP5rFsJAEiEkClM9-S0cRd_1h70MHkJu_sLc4I",
    "currency": "USD",
    //"disable-funding": "credit",
    "intent": "capture"
  };

  return (
    <div className={`${styles.checkoutView}  text-center container my-5`}>
    <h2 className="mb-4">Checkout999</h2>
    <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons style={{ layout: "horizontal" }} createOrder={(data, actions)=> {
              // handleSubmit()
              //formRef.current.submit()
              return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: cartTotal(),
                        },
                    },
                ],
              });
            }}

            onApprove={(data, actions) => {
              console.log("fin de la compra", data);
              return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
              });
          }}
            
            />
        </PayPalScriptProvider>

    <form ref={formRef} className="d-flex justify-content-center align-items-center flex-column " onSubmit={handleSubmit}>
      <input
        name="nombre"
        value={values.nombre}
        onChange={handleInputChange}
        type={"text"}
        className="form-control my-2 w-50"
        placeholder="Nombre"
        required
      />

      <input
        name="email"
        value={values.email}
        onChange={handleInputChange}
        type={"email"}
        className="form-control my-2 w-50 "
        placeholder="Email"    
        required
      />
           

      <input
        name="direccion"
        value={values.direccion}
        onChange={handleInputChange}
        type={"text"}
        className="form-control my-2 w-50 "
        placeholder="Dirección"
        required
      />

      <button
        className="btn btn-primary mt-2"
        type="submit">
        Enviar
      </button>
    </form>
  </div>
)}


export default CheckoutView;