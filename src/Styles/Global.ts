import { createGlobalStyle } from "styled-components"; 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{
      --white: #FFF;

        /* Cores Lupeon */

        --azul-primary:#0A2C5B;
        --azul-secundary:#126CFB;
        --azul-complementary:#5CC4FF;
        --azul-complementary_:rgba(19, 108, 251, 0.2);
        --azul-info:#0D45F6;

        /* Identidade visual */

        --success:#00FFC4;
        --azul-info:#0D45F6;
        --warning:#FFC94D;
        --danger:#F43831;

        /* Tons de cinza */

        --gray-3:rgba(130, 130, 130, 0.5);
        --gray-info: #515251;
        --gray-2: #F4F4F4;
        --gray-background: #E5E5E5;

        /* Box shadow padrões */

        --boxshadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;    
    }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    background-color: var(--gray-background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`