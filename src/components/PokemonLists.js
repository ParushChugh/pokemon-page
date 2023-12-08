import React from 'react'

function PokemonLists() {
  return (
    <section class="items">
        <div class="text-center" >
            <h2>POKEMON LIST </h2>
        </div>
        <div class="container">
        <div class="item" >
                <img class="pok_img" src="./assets/charmander.png"/>
                <h2>Charmander</h2>
                <a class="catch">Catch Pokimon <img src="./assets/pokemon.svg"/></a>
            </div>

            <div class="item">
                <img  class="pok_img" src="./assets/bulbasaur.png" />
                <h2>Bulbasaur</h2>
                <a class="catch">Catch Pokimon <img src="./assets/pokemon.svg"/></a>
            </div>

            <div class="item">
                <img  class="pok_img" src="./assets/charizard.png"/>
                <h2>Charizard</h2>
                <a class="catch">Catch Pokimon <img src="./assets/pokemon.svg"/></a>
            </div>

            <div class="item">
                <img  class="pok_img" src="./assets/Metapod.png"/>
                <h2>Metapod</h2>
                <a class="catch">Catch Pokimon <img src="./assets/pokemon.svg"/></a>
            </div>
      
        </div>
    </section>
  )
}

export default PokemonLists
