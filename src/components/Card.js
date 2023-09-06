import React from 'react'
import cartIcon from '../img/add-to-cart.png'


const img = "https://materializecss.com/images/sample-1.jpg"
const prezzo = "15"
// Le variabili possono essere dichiareate sia all’interno, sia all’esterno del componente

const Card = (props) => { //posso mettere props e poi scrivere props.nome, 
                          //oppure posso mettere direttamente il nome della variabile in questo modo: 
                          // const Cart = ({ img, nome, prezzo})
                    
    console.log(props)

    const {nome} = props

    return (
        <div className="card" style={{ width: '18rem', textAlign: 'center', }}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Maglia <i>Corfù</i> <br /><b>limited edition</b></h5>
                <p className="card-text">Maglia pensata e realizzata dal designer Perry e in occasione della vacanza estiva a Corfu</p>
                 <p className='card-text'> {nome} </p> {/* qui ho messo solo nome perche ho dichiarato la variabile sopra con il props. Si comporta nello stesso modo di props.prezzo */}
                <p className='card-text'> iva: {props.prezzo} </p>
                <button className="btn btn-outline-primary"> <img src={cartIcon} alt="icon" width="30px" height="30px" /> {prezzo}€ Acquista </button>
            </div>
        </div>

    )
}

export default Card