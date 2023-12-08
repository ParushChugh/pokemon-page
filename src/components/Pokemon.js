import React from 'react'

function Pokemon(props) {
    
  return (
        <div className="item">
                <img className="pok_img" src={props.img}/>
                <h2>Charmander</h2>
                <a className="catch">{props.name} <img src="./assets/pokemon.svg"/></a>
        </div>
    )
}

export default Pokemon
