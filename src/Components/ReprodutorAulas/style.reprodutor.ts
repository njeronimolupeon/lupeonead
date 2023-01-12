import styled from 'styled-components';

export const ContainerReprodutor = styled.div`
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    box-shadow: var(--box-shadow);
    border-radius: 8px;
    background-color: var(--white);
    padding: 0rem;

    header{
        width: 100%;
        
    }

    .container_desc_aula{
        width: 25%;
        padding: 1rem 1rem 0rem 1rem;
        display: flex;

        .container_titulo_desc_aula{
            width:100%;

            .titulo_aula{
                width: 100%;
                
                h1{
                    font-size: 1.2rem;
                }

                h5{
                    padding: 0.4rem 0rem;
                    color: var(--gray-text);
                    font-weight: 400;
                    font-size: 0.875rem;
                }
            }

            .container_desc_instrutor{
                width: 100%;
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                /* background-color: gray; */
                

                .container_avatar_instrutor{
                    display: flex;
                    align-items: center;
                    padding-bottom: 0.5rem;
                }

                .avatar_instrutor{
                    img{
                        width: 3.5rem;
                        border:0.2rem solid var(--azul-secundary);
                        border-radius: 50%;
                    }
                    
                }

                .nome_desc_instrutor{
                    width: 100%;
                    padding: 0rem 1rem;

                    h5{
                        font-size: 0.9rem;
                    }

                    p{
                        font-size: 0.7rem;
                    }
                }

                .container_buttons_aula{
                    width: 100%;
                    justify-content: center;
                    flex-direction: column;

                    button{
                        padding: 0.5rem;
                        width: 100%;
                        background-color: var(--azul-secundary);
                        border-radius: 3px;
                        border: none;
                        /* margin:0.5rem; */
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

                span{
                    margin-top: 1rem;
                    border-top: 0.1rem solid var(--gray-5);
                }
            }
        }

        

        

    }

    .container_lessons{
        width: 100%;
        padding: 1rem 0rem;

        h4{
            padding-bottom: 1rem;
            font-size: 1.15rem;
        }

        main{
            display: flex;
            flex-direction: column;
            gap:0.65rem;
            max-height: 13rem;
            overflow-y: auto;
            padding-right: 0.3rem;

            ::-webkit-scrollbar {
                width: 0.5rem;
            }    
            
            ::-webkit-scrollbar-track {
            background: rgb(235, 235, 235);
            border-radius:6px;        /* color of the tracking area */
            }

            ::-webkit-scrollbar-thumb {
                background-color: var(--gray-text);
                border-radius: 6px;
            }
        }

        @media(min-width:1366px){
            main{
                max-height: 15.5rem;
            }
        }

        @media(min-width:1500px){
            main{
                max-height: 25rem;
            }
        }

        @media(min-width:1900px){
            main{
                max-height: 30rem;
            }
        }
    }
`