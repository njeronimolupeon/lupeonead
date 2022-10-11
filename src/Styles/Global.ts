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
        --hover-azul:#509BF2;

        /* Identidade visual */

        --success:#00FFC4;
        --azul-info:#0D45F6;
        --warning:#FFC94D;
        --danger:#F43831;

        /* Tons de cinza */

        --gray-1:#e1e1e6;
        --gray-3:rgba(130, 130, 130, 0.5);
        --gray-grafic:#C4C4C4;
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
        z-index: 51000;
    }

    .react-modal-content{
        width: 10rem;
        max-width: 500px;
        background-color: var(--white);
        border-radius: 0.25rem;
        padding: 1rem;
        position: relative;
        font-size: 0.875rem;
        z-index: 51000;
    }

    .link_to_usuario{
        text-decoration: none;
        color: #0f418a;
      text-align: center;
      &:hover{
            opacity: 0.8;
          }

        p{
          font-size: 0.775rem;
          font-weight: 600;

          
        }
    }

    .btn_logout{
      background-color: transparent;
      border: none;
      width: 100%;
      border: 0.1rem solid var(--danger);
      color: var(--danger);
      padding: 0.1rem;
      border-radius: 0.2rem;
      font-size: 0.775rem;
      cursor: pointer;
      margin-top: 0.5rem;
      transition: 0.2s all;

      &:hover{
        background-color: var(--danger);
        color: var(--white);
      }
    }

    .react-modal-close{
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      border: 0;
      cursor: pointer;
      background: transparent;
      transition: filter 0.2s;
      padding: 0rem 0.35rem 0.1rem 0.35rem;
      border-radius: 50%;

      img{
        width: 0.6rem;
      }

      &:hover{
        background: var(--gray-4);
        filter: brightness(0.8);
      }
    }

`