import styled from 'styled-components';

export const ContainerProvas = styled.div`

    
    width: 100%;
    
    padding: 1rem;
    
    .container_global{
        background-color: var(--white);
        border-radius: 8px;
        transition: 0.3s all ease-in-out;
    }

    header{
        width: 100%;
        padding: 2rem 2rem 1rem 2rem;
        border-bottom: 1px solid var(--gray-4);
    }

    form{
        margin: 1rem;
        padding: 0.5rem 1rem 1rem 1rem;

        h4{
            font-size: 0.875rem;
            margin-bottom: 1rem;
            color: var(--gray-text);
        }

        .container_content_descricao{
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: var(--gray-info);

            textarea{
                width: 100%;
                margin: 1rem 0rem;
                border: 0.1rem solid var(--gray-3);
                padding: 0.5rem;
                border-radius: 3px;
                font-size: 0.8rem;
                background-color: var(--gray-2);

                &:focus{
                    outline: none;
                    border: 0.15rem solid var(--azul-secundary);
                    border-radius: 0.2rem;
                }
            }
        }

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

        .button_submit, .btn-salvar-pergunta{
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

        .btn-salvar-pergunta{
            width: 6%;
            margin-top: 1.6rem;
            padding: 0.5rem 0.5rem;
        }

        .container_perguntasOrNot{
            width: 100%;
            display: flex;
            justify-content: space-between;

            p{
                font-size: 0.875rem;
                color: var(--gray-text);
                display: flex;
                align-items: center;
                gap: 0.45rem
            }

            .button_salvar_resposta{
                margin: 1.5rem 0rem;
                background-color: var(--azul-secundary);
                color: var(--white);
                padding: 0.3rem 0.1rem;
                width: 5%;

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

        .container_perguntas{
            margin-top: 1rem;
            transition: 0.3s all ease-in-out;
        }

        .container_list_perguntas{
            width: 100%;
            display: flex;
            flex-direction: column;

            header{
                width: 100%;
                display: flex;
                padding: 0.4rem 0rem;

                p{
                    width: 48.5%;
                    font-weight: 600;
                    font-size: 0.75rem;
                }
            }
        }

        .linha_list_perguntas{
            display: flex;
            width: 100%;
            align-items: center;
            border-bottom: 1px solid var(--gray-5);
            padding: 0.4rem 0rem;

            span{
                font-size: 0.875rem;
                color: var(--gray-text);
                width: 95%;
            }

            .span_1{
                width: 70%;
            }

            .span_2{
                width: 26%;
            }

                .btn_lixeira{
                    border: none;
                    padding: 0rem;
                    background-color: transparent;
                    cursor: pointer;
                    display: flex;

                    &:focus{
                        outline: none;
                    }

                    img{
                        width: 1.45rem;
                    }
                }
        }

        .container_content_pergunta{
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;

            textarea{
                width: 100%;
                border: 0.1rem solid var(--gray-3);
                padding: 0.5rem;
                border-radius: 3px;
                font-size: 0.8rem;
                background-color: var(--gray-2);

                &:focus{
                    outline: none;
                    border: 0.15rem solid var(--azul-secundary);
                    border-radius: 0.2rem;
                }
            }
        }
    }

    .container_content_respostas{
        width: 100%;
        display: flex;
        flex-direction: column;

        

        input,
        select, textarea{  
            margin: 1rem 0rem 1rem 0rem;
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

    .header_list_respostas{
        width: 100%;
        display: flex;
        
        h4:first-child{
            width: 70%;
        }
    }
`