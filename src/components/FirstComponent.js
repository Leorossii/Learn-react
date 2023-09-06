import React from 'react'

// "rafce" crea in automatico lo scheletro per il componente con una arrow function
// "rfce"  crea in automatico lo scheletro per il componenste SENZA la arrow function

const FirstComponent = () => {
  return (
    <> 
      <Saluto/>
      <Saluto/> 
    </>
  )
}// le funzioni devono avere obbligatoriamente un componente padre

const Persona = () => {
  return (
  <h2> 
    Ciao Bill 
  </h2>
  )
} // le funzioni devono avere obbligatoriamente un componente padre

const Messaggio = () => {
  return (
   <h2>
    Benvenuto 
   </h2>
  )
}

const Saluto = () => {
  return(
    <div>
      <Persona/>
      <Messaggio/>
    </div>
  )
}// le funzioni devono avere obbligatoriamente un componente padre

export default FirstComponent