import styled from 'styled-components'

export const Container = styled.main`
  height: 40vh;
  background: var(--header);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1{
    margin-top: 1rem;
  }

  p{
    margin-top: 1.5rem;
  }

`

export const SearchPanel = styled.section`
  display: flex;

  
  > div{
    margin-top: 3rem;
  }

  button{
    margin-top: 3rem;
    margin-left: 1rem;
    height: 3rem;

  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8rem;
  width: 52rem;
  /* border: 1px solid red; */
`

