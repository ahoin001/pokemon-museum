import React from 'react';
import PokeCard from '../PokemonCard/PokeCard'
import * as Styled from './PokemonListStyles'

const PokemonList = (props) => {


    const pokemonCards = props.pokemonList.map((pokemon) => {
        return <PokeCard
            key={pokemon.name}
            name={pokemon.name}

        />
    }
    )

    return (
        <Styled.PokemonCardsContainer>
            {pokemonCards}
        </Styled.PokemonCardsContainer>
    );
};

export default PokemonList;