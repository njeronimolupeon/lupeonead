
import styled from 'styled-components';

export const ContainerProva = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 6px;

    .header_prova{
        width: 100%;
        padding: 1rem;
        border-bottom: 1px solid var(--gray-4);
        position: relative;

        h2{
            font-size: 1rem;
        }

        p{
            font-size: 0.8rem;
            color: var(--gray-text);
            margin-top: 0.5rem;
        }

        button{
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
            border-radius: 3px;
            border: none;
            cursor: pointer;
            /* background-color: var(--azul-secundary); */
            /* color: var(--white); */

            display: flex;
            align-items: center;
            gap: 0.5rem;

            &:hover{
                opacity: 0.7;
            }
        }
    }

    main{
        padding: 1rem;
        max-height: 30rem;
        overflow-y: auto;

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

        header:first-child{
            width: 100%;
            margin: 0.3rem 0rem 1rem 0rem;

            h2{
                font-size: 0.875rem;
            }
        }

        header{
            width: 100%;
            margin: 1rem 0rem;

            h2{
                font-size: 0.875rem;
            }
        }

        .lista_respostas{
            width: 100%;

            .resposta{
                width: 100%;
                padding: 0.4rem;
                background-color: var(--gray-4);
                border: 1px solid var(--gray-3);
                border-radius: 4px;
                margin: 0.3rem 0rem;
                transition: 0.1s all;
                cursor: pointer;

                display: flex;
                align-items: center;
                gap: 0.5rem;

                p{
                    font-size: 0.8rem;
                }

                &:hover{
                    outline: none;
                    border: 0.15rem solid var(--azul-secundary);
                    border-radius: 0.2rem;
                }
            }
        }

        .btn_salvar_prova{
            background-color: var(--azul-secundary);
            color: var(--white);
            padding: 0.5rem;
            margin-top: 1rem;
            width: 100%;

            background-color: var(--azul-secundary);
            border: none;
            color:var(--white);
            cursor: pointer;
            border-radius: 0.25rem;
            font-size: 0.775rem;
            transition: 0.2s all;

            &:hover{
                background-color: var(--hover-azul);
            }

            &:focus{
                background-color: var(--azul-secundary);
            }
        }
    }

`