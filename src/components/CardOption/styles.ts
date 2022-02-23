import styled from 'styled-components'

interface CardProps{
  type: "drinks" | "pharmacy" | "express" | "petshop";
}

export const Container = styled.div<CardProps>`
  height: 6rem;
  width: 10rem;
  display: flex;
  align-items: center ;
  justify-content: center;  
  flex-direction: column;
  padding-top: 1.5rem;

 

  .image_content{ 
    position: relative ;
    height: 60%;
    width: 100%;
    background-color: var(--yellow-beer);
    display: flex ;
    justify-content: center;
    align-items: flex-end ;
    border-radius: 0.2rem;

    img{
      position: relative;
      z-index: 5;
      height: 7rem;
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

