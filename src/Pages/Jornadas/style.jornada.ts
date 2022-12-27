import styled from 'styled-components'

export const ContainerJornada = styled.div`

    width: 100%;    
    /* max-width: 100%; */
    margin: 1rem;
    background-color: white;
    border-radius: 6px;
    padding: 1rem;
    

    .jornada_row{
        padding: 1rem 0.5rem;
        max-width: 85vw;
        position: relative;
    }

    .jornada_cards{
        overflow-y: hidden;
        overflow-x: auto;
        position: relative;
        padding-bottom: 1rem;

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
        min-width: 300px;
        display: flex;
        margin: 0rem 1rem;
        flex-direction: column;
        position: relative;
        margin-top: 1rem;

        .jornada_card_header{
            width: 100%;
            padding:5rem 1rem;
            background-color: antiquewhite;
        }

        .jornada_card_titulo{
            h2{
                padding-top: 0.8rem;
                font-size: 1rem;
            }

            p{
                color: var(--gray-text);
                font-size: 0.8rem;
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
                right: 20rem;
            }
        }
        
    }



    .modal_popup{
        background-color: transparent;
        position: absolute;
        right: -20rem;
        display: none;
        width: 20rem;
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
                    font-size: 1rem;
                }
                p{
                    margin-top: 0.5rem;
                    font-size: 0.7rem;
                    color: var(--gray-text);
                }
                span{
                    font-size: 0.7rem;
                    color: var(--gray-text);
                }
            }
            

            .modal_popup_descricao{
                p{
                    margin-top: 0.65rem;
                    font-size: 0.775rem;
                    text-align: justify;
                    line-height: 1.1rem;
                }
            }
        }

        /* &:hover{
            display: flex;    
        } */

        button{
            margin-top: 1rem;
            border: none;
            color: var(--white);
            padding: 0.4rem 0rem;
            background-color: var(--azul-secundary);
            transition: 0.2s all ease-in-out;

            &:hover{
                cursor: pointer;
                background-color: #085ad1;
            }
        }
    }

    .btn-right{
        position: absolute;
        right: -2rem;
        top: 42.5%;
        transform: rotate(180deg);

        border: none;
        border-radius:50%;
        background-color: var(--azul-secundary);
        padding: 0rem 0.15rem;
        transition: 0.2s all ease-in-out;

        &:hover{
            background-color: var(--azul-hover);
            cursor: pointer;
        }
    }

    .btn-left{
        position: absolute;
        left: 0rem;
        top: 42.5%;

        border: none;
        border-radius:50%;
        background-color: var(--azul-secundary);
        padding: 0rem 0.15rem;
        transition: 0.2s all ease-in-out;

        &:hover{
            background-color: var(--azul-hover);
            cursor: pointer;
        }
    }
    


`