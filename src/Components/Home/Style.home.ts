import styled from 'styled-components';


export const ContainerHome = styled.div`
    display: flex; 
    width: 100%;

    header{
        width: 60%; 
        margin-left: 1rem;
        margin-top: 1rem
    }

    main{
        width: 40%;
        border-radius: 8px;
        margin: 1rem 1rem 0rem 1rem;
        padding: 0rem 1rem;
        background: var(--white);
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input[type="text"]{
            background-color: transparent;
            padding: 0.2rem;
            font-size: 0.775rem;
            font-weight: 600;
            border: none;

            &:focus{
                outline: none;
            }
        }

        button[type="button"]{
            background: transparent;
            border: none;
            transition: 0.2s all;
            cursor: pointer;

            &:focus{
                outline: none;
            }

            &:hover{
                opacity: 0.5;
            }

            &:active{
                opacity: 1;
            }
        }
    }

        
`