import styled from 'styled-components'

interface CardProps{
  type: "drinks" | "pharmacy" | "express" | "petshop";
}

const typeColor = {
  drinks: '#F6D553',
  pharmacy: '#f9879c',
  express: '#ea1d2c',
  petshop: '#8c60c5'
}

export const Container = styled.div<CardProps>`
  height: 6rem;
  width: 11rem;
  display: flex;
  align-items: center ;
  justify-content: center;  
  flex-direction: column;
  padding-top: 1.5rem;
  transition: transform .3s;
  cursor: pointer;

  &:hover{
    transform: scale(1.05)
  } 

  .image_content{ 
    position: relative ;
    height: 60%;
    width: 100%;
    background-color: ${props => props.type  === 'drinks'
    ? typeColor.drinks : props => props.type === 'express'
    ? typeColor.express: props => props.type === 'petshop'
    ? typeColor.petshop: typeColor.pharmacy };
    display: flex ;
    justify-content: center;
    align-items: flex-end ;
    border-radius: 0.5rem;

    img{
      position: relative;
      z-index: 5;
      height: 6rem; 
    }  
  }  

`
export const SectionButton = styled.div` 
  display: flex;
  padding: 0 1rem 0 1rem;
  margin-top: 0.5rem;
  align-items: center;


  button{
   border: 0;
   background: none;
   font-size: 1rem;
   font-weight: bold;
  }

  svg{
    margin-left: 0.5rem;
    color: var(--red)
  }
  

`

