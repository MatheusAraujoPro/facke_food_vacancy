import styled from 'styled-components'
import { darken } from 'polished'

interface ButtonProps{
  type: "restaurant" | "supermarket";
}

const type = {
  restaurant: '#ea1d2c',
  supermarket: '#b6d048'
}

export const Container = styled.div<ButtonProps>`
 display: flex;
 align-items: center;
 justify-content: space-between;

 height: 2rem;
 width: 50%;

 padding: 1rem;
 border-radius: 0.5rem;
 background: ${props => props.type === 'restaurant'
 ? darken(0.1, '#ea1d2c'):darken(0.1, '#b6d048')};
 color: var(--background);
 font-weight: bold;

 button{
   border: 0;
   background: none;
   margin: 0;
   color: var(--background);
   font-size: 1.1rem;
   font-weight: bold;
 }

 svg{
   margin-left: 0.5rem;
 }

 

`