import styled from 'styled-components'

export const Container = styled.div` 
   background: var(--header);   
`;

export const Content = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center; 
    justify-content: space-between;   
 
    
    img{
        height: 10rem;
        width: 10rem;
    }

    nav{
        a{
            margin-left: 3rem;
            color:var(--text-title)        
        }
        
    }

    div{
        margin-left: auto;

        a{
            color: var(--red);
            font-weight: bold
        }

        button{
            margin-left: 3rem;
        }
    }
  
`

