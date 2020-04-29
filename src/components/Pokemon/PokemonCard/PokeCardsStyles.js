// ? Writing like this allows styled components to be made in an external file and used anywhere imported
import styled, { css } from 'styled-components'

export const CardContainer = styled.div` 

  /* display: flex;
  flex-direction: column; */
  
  padding: 1rem;
  border: 0.7px solid grey;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  backface-visibility: hidden;
  text-align: center;

  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

/* '&' is required to let SC know hover belongs to this component */
&:hover {
  background-color: ${props => props.alternate ? props.alternate : 'lightgreen'};
  color: 'black';
  transform: scale(1.05);
}
`;


// ? Conditionally render a set of CSS properties  
export const ListSubtitle = styled.p` 
${props => props.listLength <= 1 ? css`color: blue; font-weight: bold;` : props.listLength <= 2 ? css`color:blue;` : ''};
`;

export const AppContainerButton = styled.button` 

`;