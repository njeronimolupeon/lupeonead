import styled from 'styled-components';

export const ContainerReprodutor = styled.div`
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    margin: 1rem;
    padding: 1rem;
    box-shadow: var(--box-shadow);
    border-radius: 8px;
    background-color: var(--white);

    .container_desc_aula{
        width: 100%;
        padding: 1rem;
        display: flex;

        .container_titulo_desc_aula{
            width:70%;

            .titulo_aula{
                width: 100%;

                h1{
                    font-size: 1.2rem;
                    color: var(--gray-5);
                }

                h5{
                    padding: 0.4rem 0rem;
                    color:var(--gray-5);
                    font-weight: 400;
                    font-size: 0.875rem;
                }
            }

            .container_desc_instrutor{
                width: 100%;
                margin-top: 1rem;
                display: flex;
                align-items: center;
                
                .avatar_instrutor{
                    img{
                        width: 3.5rem;
                        border:0.2rem solid var(--azul-secundary);
                        border-radius: 50%;
                    }
                    
                }

                .nome_desc_instrutor{
                    width: 90%;
                    padding: 0rem 1rem;

                    h5{
                        font-size: 0.9rem;
                    }

                    p{
                        font-size: 0.7rem;
                    }
                }
            }
        }

        .container_buttons_aula{
            width: 30%;
            display: flex;
            /* align-items: center; */
            justify-content: center;
            flex-direction: column;

            button{
                padding: 0.5rem;
                background-color: var(--azul-secundary);
                border-radius: 3px;
                border: none;
                margin:0.5rem;
                color: var(--white);
                font-size: 0.675rem;
                cursor: pointer;
                font-weight: 600;
                text-transform: uppercase;
                transition: 0.2s all;

                &:hover{
                    opacity: 0.7;
                }

                &:active{
                    opacity: 1;
                }
            }
        }

        

    }

    .container_lessons{
        width: 100%;
        padding: 1rem 1.5rem;
    }
`