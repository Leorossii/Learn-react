import React from 'react'
import cartIcon from '../img/add-to-cart.png'



// Le variabili possono essere dichiareate sia all’interno, sia all’esterno del componente

const Product = ({nome, img, prezzo, costoFinale, children}) => {
    //posso mettere props e poi scrivere props.nome, 
    //oppure posso mettere direttamente il nome della variabile in questo modo: 
    //const Cart = ({ img, nome, prezzo})

    const handleClick = ()=> {
        console.log("mi hai premuto");
    }                                   
    const paramsHandler = (prezzo)=> {
        console.log(prezzo);   
    }
    const eventHandelr = (e) => {
        console.log(e.target.innerText);
    }

    return (
        <div className="card" style={{ width: '18rem', textAlign: 'center', }}>
            <img className="card-img-top" src={img} alt="Card image cap" onClick={handleClick}/>
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{children}</p>
                <p className='card-text'> {prezzo} </p>
                <button className="btn btn-outline-primary" onClick={() => alert("ciaone")}>
                    <img src={cartIcon} alt="icon" width="30px" height="30px" /> {costoFinale}€ Acquista
                </button>
                <button className="btn btn-outline-primary" onClick={() => paramsHandler(prezzo)}>
                    <img src={cartIcon} alt="icon" width="30px" height="30px" /> button per provare paramsHandler
                </button>
                <button className="btn btn-outline-primary" onClick={eventHandelr}>
                    <img src={cartIcon} alt="icon" width="30px" height="30px" /> button per provare eventHandelr
                </button>
            </div>
        </div>
    )
}

export default Product
