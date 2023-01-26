import styled from 'styled-components';


export const ContainerHome = styled.div`
    display: flex;
    width: 100%;
    /* margin: 1rem; */

    header{
        width: 60%;
        /* margin-left: 1rem;
        margin-top: 1rem */
    }

    main{
        width: 40%;
        border-radius: 8px;
        margin: 0rem 0rem 1rem 1rem;
        padding: 0rem 1rem;
        background: var(--white);
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input[type="text"]{
            background-color: transparent;
            padding: 0.1rem;
            font-size: 0.775rem;
            font-weight: 600;
            border: none;
            width: 100%;
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

    @media(max-width:768px){
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        main{
            width: 45%;
            margin:1rem 1rem 0rem 0.4rem;
        }

        input[type="text"]{
            width: 100%;

            font-size: 0.5rem;
        }

        header{
            
            width: 35%;
        }
    }


`

export const ContainerChartHome = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    /* padding: 1rem; */


    .container_chart_1{
        width: 20%;
        height: 10rem;
        padding:  0rem 0.5rem;
        display: flex;
        justify-content: space-between;

        background-color: var(--white);
        border-radius: 8px;
        box-shadow: var(--box-shadow);

        .conteudo_chart_1{
            width: 50%;
            padding: 1rem 0rem 0rem 0rem;

            .legend_grafic_1{
                display: flex;

                flex-direction:column;
                font-size: 0.675rem;
                width: 50%;

                span{
                    margin: 0.3rem 0rem;
                    height: 0.2rem;
                }
            }
        }


    }

    .container_grafics_2{
        width: 30%;
        padding: 0rem 0rem 0rem 0.75rem;
        display: flex;
        height: 10rem;
        flex-direction: column;
        gap: 1rem;

        .grafics_2_1{
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 0.3rem 0.5rem;
            background-color: var(--white);
            border-radius: 8px;

            label{
                background-color: var(--danger);
                color: var(--white);
                border-radius: 12px;
                font-size: 0.75rem;
                padding: 0.1rem 0.4rem;
            }
        }

        .grafics_2_2{
            width: 100%;
            height: 50%;
            display: flex;

            align-items: center;
            justify-content: space-around;
            padding: 0.3rem 0.5rem;
            background-color: var(--white);
            border-radius: 8px;

            label{
                background-color: var(--success);
                color: var(--azul-primary);
                border-radius: 12px;
                font-size: 0.75rem;
                padding: 0.1rem 0.4rem;
            }
        }
    }

    .container-grafics_3{
        width: 25%;
        padding: 0rem 0rem 0rem 0.75rem;
        display: flex;
        height: 10rem;
        flex-direction: column;

        .grafics_3{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--white);
            border-radius: 8px;

            .legend_grafic_3{
                display: flex;
                height: 50%;
                align-items: center;
                justify-content: space-around;
                text-align: center;

                h3{
                    font-size: 0.8rem;
                    color:var(--azul-secundary);
                }

                label{
                    font-size: 0.675rem;
                    color:var(--azul-primary);
                    font-weight: 600;
                    display: flex;
                    
                    justify-content: space-around;
                    margin-top: 0.35rem;

                    p{
                        width: 1rem;
                    }
                }
            }
        }
    }

    .container-grafics_4{
        width: 25%;
        padding: 0rem 0rem 0rem 0.75rem;
        display: flex;
        height: 10rem;
        flex-direction: column;

        .grafics_4{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--white);
            border-radius: 8px;
        }
    }

    @media (max-width:768px){
        flex-direction: column;
        width: 100%;
        height: 50rem;

        .container_chart_1{
            width: 100%;
            height: 10rem;
            margin-bottom: 1rem;
        }

        .container_grafics_2{
            width: 100%;
            height: 12rem;
            padding: 0rem;
            margin-bottom: 1rem;
        }

        .container-grafics_3{
            width: 100%;
            padding: 0rem;
            margin-bottom: 1rem;
        }

        .container-grafics_4{
            width: 100%;
            padding: 0rem;
        }

    }
`

export const ListagemHome = styled.div`

    display: flex;
    width: 100%;
    /* background-color: white; */
    /* padding: 10rem; */
    border-radius: 6px;
    gap: 1rem;

    main{
        width: 50%;
        background-color: white;
        border-radius: 6px;
        padding: 1rem;

        header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 0.1rem solid rgb(230, 230, 230);
            padding-bottom: 0.5rem;

            span{
                font-size: 0.8rem;
                font-weight: 600;
            }
        }

        .content_listagem_one{
            width: 100%;
            margin-top: 0.5rem;

            .row_listagem{
                
                width: 85%;
                text-align: left;
            }

            .row_listagem_{
                width: 15%;
                padding-right: 0.5rem;
                text-align: right;
            }

            span{
                font-size: 0.7rem;
                font-weight: 400;
            }
        }

        footer{
            button{
                border: 0.1rem solid var(--gray-4);
                background-color: transparent;
                font-size: 0.7rem;
                font-weight: 600;
                margin-top: 1rem;
                cursor: pointer;
                padding: 0.2rem 0.6rem;
                border-radius: 3px;
                transition: 0.2s all ease-in-out;

                &:hover{
                    background-color: var(--gray-2);
                }
            }
        }


        .content_listagem_two{
            width: 100%;
            margin-top: 0.5rem;

            .row_listagem_two{
                
                width: 50%;
                text-align: left;
            }

            .row_listagem_two_progresso{
                
                width: 35%;
                margin-top: 0.2rem;
                display: flex;
                gap: 0.8rem;

                .fundo_barra_progress{
                    background-color: rgb(230,230,230);
                    width: 85%;
                    height: 0.5rem;
                    border-radius: 3px;
                    margin-top: 0.2rem;
                    

                    .barra_progress{
                        width: 55%;
                        height: 100%;
                        border-radius: 3px;
                        background-color: var(--azul-secundary);
                    }

                }

                span{

                }
            }

            .row_listagem_two_{
                width: 15%;
                padding-right: 0.5rem;
                text-align: right;
            }

            span{
                font-size: 0.7rem;
                font-weight: 400;
            }
        }
    }

`

