import styled from 'styled-components'

interface CardProps{
  type: "restaurant" | "supermarket";
}

const type = {
  restaurant: '#ea1d2c',
  supermarket: '#b6d048'
}

export const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  background: ${props => props.type === 'restaurant'
  ? type.restaurant : type.supermarket};
  border-radius: 1rem; 
  padding: 0.5rem 0.5rem 0 0.5rem;
  max-height: 13.1rem;

  h1{
    padding: 0.5rem;
    color: var(--background)
  }

`

export const Content = styled.div`
   display: flex;
   flex-direction: row; 
   padding: 0.5rem 0 0 0.5rem; 
   align-items: center; 
   margin-top: -2rem;

   div{
     margin-top: 3rem;
   }

   img{
     margin-top: auto;
     padding: 0;
     height: 10rem;
   }

`