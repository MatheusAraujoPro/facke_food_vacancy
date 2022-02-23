import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;  

  div{
    display: flex;
    background: var(--background);
    align-items: center;
    padding: 0.8rem;
    border-radius: 0.5rem 0  0 0.5rem  ;
  }

  input{    
    border: 0;
    width: 40rem;
    padding-left: 0.5rem ;
    font-size: 1.1rem;
    border-radius: 0 0.5rem 0.5rem 0 ;
  
    /* Zerando o estilo padrão do navegador */
    &:focus{
      box-shadow: 0 0 0 0;
      outline: 0;
    } 
  }

`