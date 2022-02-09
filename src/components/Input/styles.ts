import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;  

  div{
    display: flex;
    background: var(--background);
    align-items: center;
    padding: 0.8rem;
  }

  input{    
    border: 0;
    width: 40rem;
    padding-left: 0.5rem;
    font-size: 1.1rem;
    border-radius: 0.5rem;
  
    /* Zerando o estilo padrão do navegador */
    &:focus{
      box-shadow: 0 0 0 0;
      outline: 0;
    } 
  }

`