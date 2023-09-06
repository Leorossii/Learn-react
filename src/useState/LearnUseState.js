import React, { useState } from "react";
import { data } from "../data";

{
    /* LESSONS1 */
}
// const LearnUseState = () => {
//     let titolo = "hello world";

//     const cambiaTitolo = () => {
//         titolo = 'nuovo titolo';
//         console.log(titolo);
//     }
//     return (
//         <React.Fragment>
//             <h2> {titolo}</h2>
//             <button className='btn btn-info my-3' onClick={cambiaTitolo}>
//                 Change me
//             </button>
//         </React.Fragment>
//     )
// }

{
    /* LESSONS2 */
}
// const LearnUseState = () => {

//     //      //lo useState viene creato come un array, in cui la funzione in seconda posizione [1]
//     //controlla lo stato del valore presente nella prima posizione [0]
//     // const value = useState()[0];
//     // const handler = useState()[1];
//     // console.log(value, handler);

//     //destrutturiamo l'array di useState
//     const [titolo, setTitolo] = useState("helloworld")
//     //in questo caso titolo è il valore e setTitolo è la funzione che controlla lo stato.
//     // per convezione la funzione si chiama con "set" e il nome del valore
//     const cambiaTitolo = () => {
//         if (titolo == 'helloworld') {
//             setTitolo('titoloCambiato')
//         } else {
//             setTitolo('helloworld')
//         }
//     }

//     return (
//         <>
//             <h2> {titolo} </h2>
//             <button className='btn btn-info my-3 shadow' onClick={cambiaTitolo}> Change </button>
//         </>
//     )
// }

{
    /* LESSONS3 */
}
// const LearnUseState = () => {
//     const [people, setPeople] = useState(data);

//     const removeItem = (id) =>{
//         let newPeople = people.filter( el => el.id !== id);
//         setPeople(newPeople)
//     }
//     return (
//         <>
//             <h2> useState con Array </h2>
//             {
//                 people.map(el => {
//                     const {id, name} = el;
//                     return (
//                         <div key={id} className='item shadow'>
//                             <h5>{name}</h5>
//                             <button type='button' className='btn btn-danger' onClick={()=> removeItem(id)}>
//                                 X
//                             </button>
//                         </div>
//                     )
//                 })
//             }

//         </>
//     )
// }

{
    /* LESSONS4 */
}
// const LearnUseState = () => {
//   const [person, setPerson] = useState({
//     nome: "Leo",
//     eta: 22,
//     saluto: "ciaone",
//   });

//   //   const change = () => {
//   //     setPerson({
//   //       ...person, //RICORDA di passare sempre lo spread operator cosi che faccia una copia di quello vecchio e non perdi dati.
//   //       eta: 23,
//   //       saluto: "ciao",
//   //     });
//   //   };
//   const change = () => {
//     if (person.saluto === "ciaone" && person.eta === 22) {
//         setPerson({
//             ...person,
//             saluto: "ciao",
//             eta: 23,
//           });
//     } else {
//         setPerson({
//             ...person,
//             saluto: "ciaone",
//             eta: 22,
//           });

//     }

//   };

//   return (
//     <>
//       <h2> useState con Object </h2>
//       <h5> {person.nome} </h5>
//       <h5> {person.eta} </h5>
//       <h5> {person.saluto} </h5>

//       <button className="btn btn-secondary" onClick={change}>
//         Cambia
//       </button>
//     </>
//   );
// };

{
    /* LESSONS5 */
}
const LearnUseState = () => {
    const [contatore, setContatore] = useState(0);

    const reset = () => {
        setContatore(0)
    }
    const diminuisci = () => {
        setContatore(contatore - 1)
    }
    const aumenta = () => {
        setContatore(contatore + 1)
    }

    const aumenta2Secondi = () => {
        setTimeout(function () {
            setContatore((oldValue) => {
                return oldValue + 1;
              })
        },2000)
    }

    return (
        <>
            <h2> useState con Contatore </h2>
            <div className="bg-white shadow rounded py-5 w-25 col-6 offset-3 m-auto">
                <h3> {contatore} </h3>
                <div className=" d-flex justify-content-between">
                    <button className="btn btn-secondary mx-4" onClick={diminuisci} > - </button>
                    <button className="btn btn-primary mx-4" onClick={aumenta}> + </button>
                    <button className="btn btn-primary mx-4" onClick={aumenta2Secondi}> aumenta dopo 2 secondi </button>
                </div>
                <button className="btn btn-danger my-2" onClick={reset}> Reset </button>
            </div>
        </>
    );
};
export default LearnUseState;
