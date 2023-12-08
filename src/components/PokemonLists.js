import React from 'react'
import Pokemon from './Pokemon'



function PokemonLists() {

  let PokemonData = [
    {
      id:1,
      img:'./assets/charmander.png',
      name:'Charmander',
    },
    {
      id:2,
      img:'./assets/bulbasaur.png',
      name:'Bulbasaur',
    },
    {
      id:3,
      img:'./assets/charizard.png',
      name:'Charizard',
    },
    {
      id:4,
      img:'./assets/Metapod.png',
      name:'Metapod',
    },
  
  ];
  
return (
    <section className="items">
        <div className="text-center" >
            <h2>POKEMON LIST </h2>
        </div>
        <div className="container">
          {
            PokemonData.map((pok)=>{
              return <Pokemon key={pok.id} img={pok.img} name={pok.name}/>
            })
          }
          
        </div>
    </section>
  )
}

export default PokemonLists
