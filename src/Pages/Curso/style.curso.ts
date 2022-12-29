import styled from 'styled-components';

export const ContainerCadastroAulas = styled.div`

    background-color: var(--white);
    width: 100%;
    border-radius: 8px;

    header{
        width: 100%;
        padding: 2rem;
    }

    form{
        margin: 1rem;
        padding: 1rem;

        .container_content_1{
            display: flex;
            gap:1rem;

            .div_container_inputs{
                display: flex;
                flex-direction: column;
                width: 50%;
                gap: 0.5rem;
                font-size: 0.875rem;
                color: var(--gray-info);
            }

                input[type="text"]{
                    margin: 0rem 0rem 1rem 0rem;
                    border: 0.1rem solid var(--gray-3);
                    border-radius: 3px;
                    background-color: var(--gray-2);
                    padding: 0.25rem 0.5rem;
                    font-size: 0.875rem;
                    width: 100%;

                    &:focus{
                        outline: none;
                        border: 0.15rem solid var(--azul-secundary);
                        border-radius: 0.2rem;
                    }
                }

        }

        .container_content_2,
        .container_content_3{
            display: flex;
            gap:1rem;

            .div_container_inputs{
                display: flex;
                flex-direction: column;
                width: 50%;
                gap: 0.5rem;
                font-size: 0.875rem;
                color: var(--gray-info);
            }

                input,
                select{  
                    margin: 0rem 0rem 1rem 0rem;
                    border: 0.1rem solid var(--gray-3);
                    border-radius: 3px;
                    background-color: var(--gray-2);
                    padding: 0.25rem 0.5rem;
                    font-size: 0.875rem;
                    width: 100%;

                    &:focus{
                        outline: none;
                        border: 0.15rem solid var(--azul-secundary);
                        border-radius: 0.2rem;
                    }
                }

        }

        button{
            margin: 1.5rem 0rem;
            background-color: var(--azul-secundary);
            color: var(--white);
            padding: 0.8rem;
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