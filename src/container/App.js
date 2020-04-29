import React, { useState, useEffect } from 'react';
import PokemonList from '../components/Pokemon/PokemonList/PokemonList'
import Search from '../components/Search/Search';

import axios from 'axios'

import './App.css';

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [searchResult, setsearchResult] = useState('')

  useEffect(() => {

    const fetchedPokemonList = async () => {

      // ? First get List of Pokemon
      await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50')
        .then((pokemonListResponse) => {

          // console.log(`Response from pokemonAPI *********** : `, pokemonListResponse)
          // console.log(`Response from pokemonListResponse *********** : `, pokemonListResponse.data.results)

          setPokemonList(pokemonListResponse.data.results);

        })
        .catch((err) => {
          console.log(`Error in call`, err)
        }
        )
    }

    fetchedPokemonList()

  }, [])

  const searchBarHandler = (event) => {

    // console.log(`Search bar says ${event.target.value}`)
    setsearchResult(event.target.value)

  }

  let filterdPokemonList = [...pokemonList];

  if (pokemonList && searchResult.length > 0) {

    let copiedArray = [...pokemonList];
 
    // ? Filter list to be pokemon names that have searched letters
    filterdPokemonList = copiedArray.filter(pokemon => {

      return pokemon.name.toLowerCase().includes(searchResult.toLowerCase())

    })

  }


  return (

    <div className="App">

      <Search onChange={searchBarHandler} />

      {filterdPokemonList &&
        <PokemonList pokemonList={filterdPokemonList} />
      }


    </div>

  );

}

export default App;
