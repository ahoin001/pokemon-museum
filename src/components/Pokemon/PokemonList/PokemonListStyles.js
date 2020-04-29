// ? Writing like this allows styled components to be made in an external file and used anywhere imported
import styled from 'styled-components'

export const PokemonCardsContainer = styled.div` 
  width: 85vw;
  margin: 0 auto;
  padding:2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3rem;
`;
