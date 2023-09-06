import './App.css';
import logo from './img/Logo Fortunati.png'
import FirstComponent from './components/FirstComponent';
import './index.css';
import Card from './components/Card';
import Prodotto from './components/Product';
import {products} from './data'

import LearnUseState from './useState/LearnUseState';

// "rafce" crea in automatico lo scheletro per il componente con una arrow function
// "rfce"  crea in automatico lo scheletro per il componenste SENZA la arrow function 


function App() {
  const primaCard = {
    nome: "10€ amazon",
    prezzo: 2.10,
  }
  const secondaCard = {
    nome: "20€ amazon",
    prezzo: 5.10,
  }
  // ESEMPIO di come usare al meglio lo spread operator 
  // const numeri = [1,2,3,4,5,6,7,8,9]; 
  // console.log(Math.max(...numeri)); 

  return (
    <div className="App">

      <nav className="navbar navbar-light bg-light px-5">
        <a className="navbar-brand" href="#">
          <img src={logo} width='80px' height='100px'
            className="d-inline-block align-top" alt="" />
          FORTUNATI
        </a>
      </nav>
      <h1> La CARD </h1>
      <div className="content p-5 d-flex justify-content-around">
        {/* 3 metodi uguali, danno lo stesso idetico risultato */}
        <Card
          {...primaCard} // si chiama spread operator e emula il comportamento di quelli sotto. Esempio sopra 
        />
        {/* 3 metodi uguali, danno lo stesso idetico risultato */}
        <Card
          nome={secondaCard.nome}
          prezzo={secondaCard.prezzo}
        />
        {/* 3 metodi uguali, danno lo stesso idetico risultato */}
        <Card
          nome='30€ amazon'
          prezzo='6.3'
        />

      </div>
      {/* <FirstComponent /> */}


    </div>

  );

}

function App2() {

  // const nomi = ["Omar", "Tazio", "Dexter"];
  // const nuoviNomi = nomi.map((nome) => {
  //   return <h2> {nome} </h2> //questo metodo si puà fare anche detnro il componente 
  // });

  // il .map accetta fino a 3 parametri: 
  // 1. il primo riguarda il singolo elemento dell'array e per convenzione viene chiamato "el", ma puo essere chiamato come si vuole
  // 2. il secondo riguarda l'index dell'array 
  // 3. il terzo riguarda l'intero array

  return (
    <div className="App">
      <h2> La nostra prima Card</h2>
      {/* <p>
        {nuoviNomi}
      </p> */}
      <div className="content p-5 d-flex justify-content-around">
        {products.map((prodotto) => {           
          return <Prodotto key={prodotto.id} {...prodotto}/>
        })}
      </div>
    </div>
  )
}

function App3() {

  return (
    <div className="App">
      <LearnUseState/>
      
    </div>
  )
}

// export default App;
// export default App2;
export default App3;
