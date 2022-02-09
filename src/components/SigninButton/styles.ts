import styled from 'styled-components'

export const Container = styled.button`
  border: 0;
  background: var(--red);
  color: var(--background);
  padding: 0.8rem 2.2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  
`