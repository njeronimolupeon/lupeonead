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
        --gray-4: #DCDCE0;
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



  /* Style modal User */
  
  .react-modal-overlay{
        background-color:transparent;
        position: fixed;
        bottom: 1rem;
        left:4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--boxshadow);
    }

    .react-modal-content{
        width: 100%;
        max-width: 500px;
        background-color: var(--white);
        border-radius: 0.25rem;
        padding: 1rem;
        position: relative;
        font-size: 0.875rem;
    }

    .react-modal-close{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      border: 0;
      cursor: pointer;
      background: transparent;
      transition: filter 0.2s;
      padding: 0.2rem 0.35rem 0.1rem 0.35rem;
      border-radius: 50%;

      &:hover{
        background: var(--gray-4);
        filter: brightness(0.8);
      }
    }

`