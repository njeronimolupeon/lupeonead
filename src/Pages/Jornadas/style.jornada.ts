import styled from 'styled-components'

export const ContainerJornada = styled.div`

    width: 100%;    
    /* margin: 1rem; */
    background-color: white;
    border-radius: 6px;
    padding: 0rem 1rem;
    

    .jornada_row{
        padding: 1rem 0.5rem;
        max-width: 85vw;
        position: relative;
        transition: 0.2s all ease-in-out;
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
        min-width: 14%;
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
        right: -1rem;
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