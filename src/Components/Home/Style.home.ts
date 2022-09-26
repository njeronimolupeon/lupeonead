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
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input[type="text"]{
            background-color: transparent;
            padding: 0.1rem;
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

    @media(max-width:768px){
        main{
            width: 45%;
            margin:1rem 1rem 0rem 0.4rem;
        }

        input[type="text"]{
            width: 100%;

            font-size: 0.5rem;
        }

        header{
            width: 50%;
        }
    }


`

export const ContainerChartHome = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    padding: 1rem;


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