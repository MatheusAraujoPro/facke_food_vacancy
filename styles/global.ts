import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Definido Variáveis no CSS */
  :root{
    --header: #f7f7f7;
    --background: #ffff;
    --red:#C2121F;
    --green: #b6d048;
    --yellow-beer:#F6D553;
    --purple:#8c60c5;
    --pink-light:#f9879c; 
    --text-title: #000;
    --text-body: #f7f7f7;  

  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Tamanho Padrão de Fonte: 16px(Foco no Desktop) */
  html{
    @media(max-width: 1080px){
      font-size: 93.75% // 15 px
    }
    @media(max-width: 720px){
      font-size: 87.5% // 14 px
    }
  }
  body{
    background: var(--background);
    /* Deixa as fontes de navegagores baseados no Chrome mais Nítida */
    -webkit-font-smoothing: antialiased; 
  }
  /* Por padrão o Button, Input e Text Área não importam a fonte do Body */
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }
  button{
    cursor: pointer;
  }
  /* Para todo o conteúdo desablitado */
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  } 
  
`