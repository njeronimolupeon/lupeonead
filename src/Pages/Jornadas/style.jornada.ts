import styled from 'styled-components'

export const ContainerFilters = styled.div`
    width: 100%;
    padding: 0rem 0rem 0.5rem 0.5rem;
    
    .container_filters{
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        h4{
            font-size: 0.875rem;
        }
        

        button{
            border: none;
            border-radius: 12px;
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
            /* margin: 0.3rem; */
            transition: 0.2s all ease-in-out;

            &:hover{
                opacity: 0.6;
                cursor: pointer;
            }
            
        }

        .btn_todas{
            margin-left: 1rem;
        }

        .btn_favoritos{
            margin-left: 0.5rem;
        }

    }
    
`

export const ContainerJornada = styled.div`

    width: 100%;    
    /* margin: 1rem; */
    background-color: white;
    border-radius: 6px;
    padding: 0rem 1rem;
    

    .jornada_row{
        padding: 1rem 0rem 0rem 0rem;
        max-width: 85vw;
        position: relative;
        transition: 0.2s all ease-in-out;

        h3{
            padding-left: 1rem;
            font-size:1rem;
            cursor:pointer;
            transition: 0.3s all ease-in-out;

            &:hover{
                color: var(--azul-secundary);
            }
        }
    }


    @media(max-width: 1024px){
        .jornada_row{
            max-width: 78vw;
        }
    }

    @media(min-width: 1600px){
        .jornada_row{
            max-width: 90vw;
        }
    }

    .jornada_cards{
        overflow-y: hidden;
        overflow-x: auto;
        position: relative;
        padding-bottom: 1rem;
        transition: 0.2s all ease-in-out;
        scroll-behavior: smooth;

        ::-webkit-scrollbar-track {
            background: rgb(240,240,240);        /* color of the tracking area */
        }

        ::-webkit-scrollbar-thumb {
            background-color: rgb(200,200,200);
            border-radius: 1rem;
        }

        ::-webkit-scrollbar {
            height: 0.5rem;
        }
    }

    .jornada_inner{
        display: flex;
    }

    .jornada_card{
        min-width: 250px;
        max-width: 250px;
        display: flex;
        margin: 0rem 1rem;
        flex-direction: column;
        position: relative;
        margin-top: 1rem;

        .jornada_card_header{
            width: 100%;
            padding:4rem 1rem;
            background-color: antiquewhite;
        }

        .jornada_card_titulo{
            h2{
                padding-top: 0.8rem;
                font-size: 0.87rem;
            }

            p{
                color: var(--gray-text);
                font-size: 0.7rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                button{
                    border: none;
                    background-color: transparent;
                    
                    
                    svg{
                        width: 2rem;
                        height: 1.5rem;
                        transition: 0.5s all ease-in-out;

                        &:hover{
                            cursor: pointer;
                        }

                        &:hover path{
                            fill: #2121E0;
                        }
                    }
                    
                }
            }
        }

        
        &:hover{
            .modal_popup{
                display: flex;
            }
        }

        &:last-child:hover{
            .modal_popup{
                display: flex;
                right: 16.5rem;
            }
        }

        &:first-child:hover{
            .modal_popup{
                display: flex;
                right: -17rem;
            }
        }
        
    }



    .modal_popup{
        background-color: transparent;
        position: absolute;
        right: -17rem;
        display: none;
        width: 17rem;
        z-index: 10000;
        transition: 0.2s all;

        .modal_popup_content{
            margin-left: 1rem;
            z-index: 10000;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            padding: 1rem;
            
            flex-direction: column;
            display: flex;
            background-color: rgba(255, 255, 255, 1);
            transition: 0.2s all ease-in-out;
            width: 100%;

            .modal_popup_titulo{
                width: 100%;
                h2{
                    font-size: 0.875rem;
                }
                p{
                    margin-top: 0.5rem;
                    font-size: 0.65rem;
                    color: var(--gray-text);
                }
                span{
                    font-size: 0.65rem;
                    color: var(--gray-text);
                }
            }
            

            .modal_popup_descricao{
                p{
                    margin-top: 0.65rem;
                    font-size: 0.65rem;
                    text-align: justify;
                    line-height: 0.9rem;
                }
            }
        }

        /* &:hover{
            display: flex;    
        } */

        button{
            margin-top: 0.8rem;
            border: none;
            color: var(--white);
            padding: 0.4rem 0rem;
            background-color: var(--azul-secundary);
            transition: 0.2s all ease-in-out;
            font-size: 0.775rem;

            &:hover{
                cursor: pointer;
                background-color: #085ad1;
            }
        }
    }

    .btn-right{
        position: absolute;
        right: 0rem;
        top: 42.5%;
        transform: rotate(180deg);

        border: none;
        border-radius:50%;
        background-color: var(--azul-secundary);
        padding: 0.1rem 0.15rem;
        transition: 0.2s all ease-in-out;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: var(--azul-hover);
            cursor: pointer;
        }

        img{
            width: 2rem;
        }
    }

    .btn-left{
        position: absolute;
        left: 0rem;
        top: 42.5%;

        border: none;
        border-radius:50%;
        background-color: var(--azul-secundary);
        padding: 0.1rem 0.15rem;
        transition: 0.2s all ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: var(--azul-hover);
            cursor: pointer;
        }

        img{
            width: 2rem;
        }
    }
    


`

export const ContainerDetailJornada = styled.div`
    width: 100%;
    padding: 1rem;

    .container_content{
        display: flex;
        width: 100%;
    }

    .content{
        width: 80%;
        
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .container_dados_jornada{
        width: 30%;
        padding: 0rem 1rem;
    }

    .container_infogeral_jornada{
        display: flex;
        padding: 1rem;
        width: 100%;
        background-color: white;
        border-radius: 6px;
    }

    .img_jornada{
        padding: 4rem 4rem;
        background-color: aliceblue;
    }

    .content_infogeral_jornada{
        padding: 0rem 2.5rem;
        
        width: 100%;

        h3{
            font-size: 1.1rem;
        }

        .container_desc_infogeral_jornada{
            padding: 1rem 0rem;

            p{
                color:var(--gray-text);
                font-size: 0.875rem;
            }
        }

        .container_progresso_infogeral_jornada{
            width: 100%;
            

            .container_barraprogressao{
                margin-top: 0.8rem;
                background-color: rgb(235,235,235);
                width: 80%;
                height: 0.8rem;

                .barra_progressao{
                    /* width: 50%; */
                    height: 100%;
                }
            }
        }
    }


//listagem de aulas

    .container_lista_aulas{
        padding: 1rem;
        background-color: white;
        border-radius: 6px;

        main{
            > header{
                text-align: center;
                padding-bottom: 0.5rem;
                border-bottom: 0.05rem solid rgb(220,220,220);
            }

            h3{
                color: var(--gray-text);
            }

            .container_table_aulas{
                header{
                    width: 100%;
                    background-color: var(--gray-4);
                    margin-top: 0.8rem;
                    display: flex;
                    
                    p{
                        text-transform: uppercase;
                        width: 20%;
                        text-align: center;
                        font-weight: 600;
                        font-size: 0.75rem;
                        padding: 0.3rem;
                        color: var(--gray-text);
                    }
                }

                .container_content_lista_aulas{
                    width: 100%;
                }

                .content_lista_aulas{
                    width: 100%;

                    .aula{
                        display: flex;
                        width: 100%;
                        padding-left: 0.5rem;
                        background-color: var(--gray-2);
                        border-bottom: 1px solid var(--gray-4);
                        transition: 0.2s all ease-in-out;

                        p{
                            width: 20%;
                            font-size: 0.75rem;
                            color: var(--gray-text);
                            font-weight: 600;
                            padding: 0.5rem 0rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 0.5rem;

                            img{
                                width: 1.25rem;
                            }
                        }

                        .titulo{
                            color:var(--azul-secundary);
                            transition: 0.2s all ease-in-out;

                            &:hover{
                                cursor: pointer;
                                color:var(--azul-primary);
                            }
                        }

                        &:hover{
                            background-color: var(--gray-5);
                        }
                    }
                }
            }

        }
    }

    //DADOS JORNADA

    .container_content_dados_jornada{
        background-color: var(--white);
        border-radius: 6px;
        padding: 1rem;

        h3{
            text-align: center;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--gray-4);
        }

        .container_desc_dados_jornada{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 1rem;

            main{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 0.5rem;
                gap: 1rem;

                img{
                    width: 2rem;
                }

                p{
                    font-weight: 600;
                    font-size: 0.7rem;
                    color: var(--azul-secundary);
                }

                span{
                    color: var(--gray-text);
                    font-size: 0.7rem;
                }
            }
        }
    }
`