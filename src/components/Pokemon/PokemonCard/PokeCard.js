import React, { useEffect, useState } from 'react'
import axios from "axios";
import * as Styled from './PokeCardsStyles'

const PokeCard = (props) => {

    const [pokemon, setPokemon] = useState(null)

    // ? Use Pokemon Name to get Specific details for it
    useEffect(() => {

        const fetchedPokemon = async () => {

            await axios.get(`http://pokeapi.co/api/v2/pokemon/${props.name}/`)
                .then((pokemon) => {

                    // console.log(`Response from pokemon card: `, pokemon.data);

                    const types = pokemon.data.types.map(pokemonTypes => pokemonTypes.type.name).join(', ')

                    setPokemon(prevState => ({
                        ...prevState,
                        name: pokemon.data.name,
                        sprite: pokemon.data.sprites.front_default,
                        types: types
                    }));


                })
                .catch((err) => {
                    console.log(`Error in call`, err)
                }
                )
        }

        fetchedPokemon()

    }, [props.name])

    // ? Switch seems more intuitive but if is less lines . 
    let hoverColor;

    if (pokemon) {
        if (pokemon.types.split(', ')[0] === 'fire') {
            hoverColor = `rgb(240,128,48)`
        } else if (pokemon.types.split(', ')[0] === 'flying') {
            hoverColor = `rgb(164,138,241)`
        } else if (pokemon.types.split(', ')[0] === 'dark') {
            hoverColor = `rgb(112,88,72)`
        } else if (pokemon.types.split(', ')[0] === 'electric') {
            hoverColor = `rgb(254,211,39)`
        } else if (pokemon.types.split(', ')[0] === 'ghost') {
            hoverColor = `rgb(110,85,155)`
        } else if (pokemon.types.split(', ')[0] === 'bug') {
            hoverColor = `rgb(168,184,32)`
        } else if (pokemon.types.split(', ')[0] === 'water') {
            hoverColor = `rgb(106,145,237)`
        } else if (pokemon.types.split(', ')[0] === 'fairy') {
            hoverColor = `rgb(222,165,222)`
        } else if (pokemon.types.split(', ')[0] === 'normal') {
            hoverColor = `rgb(162,162,110)`
        } else if (pokemon.types.split(', ')[0] === 'ground') {
            hoverColor = `rgb(231,197,103)`
        } else if (pokemon.types.split(', ')[0] === 'poison') {
            hoverColor = `rgb(160,38,163)`
        } else if (pokemon.types.split(', ')[0] === 'fighting') {
            hoverColor = `rgb(192,48,40)`
        } else if (pokemon.types.split(', ')[0] === 'psychic') {
            hoverColor = `rgb(255,84,140)`
        } else if (pokemon.types.split(', ')[0] === 'dragon') {
            hoverColor = `rgb(131,83,249)`
        } else if (pokemon.types.split(', ')[0] === 'rock') {
            hoverColor = `rgb(183,159,56)`
        }
    }

    // if (pokemon) {

    //     switch (pokemon.types.split(', ')[0]) {
    //         case 'fire':
    //             hoverColor = `rgb(240,128,48)`
    //             break;

    //         case 'flying':
    //             hoverColor = `rgb(164,138,241)`
    //             break;

    //         case 'dark':
    //             hoverColor = `rgb(112,88,72)`
    //             break;

    //         case 'electric':
    //             hoverColor = `rgb(254,211,39)`
    //             break;

    //         case 'ghost':
    //             hoverColor = `rgb(110,85,155)`
    //             break;

    //         case 'bug':
    //             hoverColor = `rgb(168,184,32)`
    //             break;

    //         case 'water':
    //             hoverColor = `rgb(106,145,237)`
    //             break;

    //         case 'fairy':
    //             hoverColor = `rgb(222,165,222)`
    //             break;

    //         case 'normal':
    //             hoverColor = `rgb(162,162,110)`
    //             break;

    //         case 'ground':
    //             hoverColor = `rgb(231,197,103)`
    //             break;

    //         default:
    //             console.log('Don;t have color for type: ' + pokemon.types.split(', ')[0] + '.');
    //     }
    // }


    return (

        <React.Fragment>

            {pokemon &&
                <Styled.CardContainer alternate={hoverColor}>
                    <p>{pokemon.name.toUpperCase()}</p>
                    <img src={pokemon.sprite} alt={`Front of ${pokemon.name}`} />
                    <p>{pokemon.types.toUpperCase()}</p>
                </Styled.CardContainer>
            }

        </React.Fragment>

    )

}

export default PokeCard
