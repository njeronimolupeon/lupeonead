

import styled from 'styled-components';

export const ContainerCursosLista = styled.div`

    
    border-radius: 8px;
    width: 100%;
    padding: 1rem;
    margin: 1rem;

    header{
        display: flex;
        width: 100%;
        margin-bottom: 2rem;
        
        justify-content: space-between;

        main{
            width: 60%;
            box-shadow: var(--boxshadow);
        }

        button{
            width: 100%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--white);
            color: var(--gray-text);
            font-size: 0.875rem;
            border-radius: 16px;
            cursor: pointer;
            transition: 0.2s all;
            gap: 0.5rem;
            padding: 0.3rem 0.8rem;

            &:hover{
                opacity: 0.8;
            }
        }
    }

    main{
        
        border-radius: 6px;
        width: 100%;
        background-color: var(--white);
    }

    .table_cursos{
        padding: 0.5rem 1rem;
        width: 100%;

        .header_table_cursos{
            width: 100%;
            

            td{
                padding: 0.5rem;
                border:none;
                color: var(--gray-text);
                font-weight:500;
                font-size: 0.875rem;
                
            }
        }

        tbody{
            
            td{
                padding: 0.5rem;
                border:none;
                color: var(--gray-info);
                font-weight:500;
                font-size: 0.7rem;
                
            }
        }

        h2{
            font-size: 1.4rem;
        }
    }

    footer{
        border-top: 1px solid #EBEBEB;
        padding: 1rem;

        display: flex;
        justify-content: space-between;

        .container_btn_exportar{
            button{
                border: 1px solid #EBEBEB;
                border-radius: 6px;
                background-color: transparent;
                cursor: pointer;
                padding: 0.3rem 0.8rem;
                font-size: 0.7rem;
                display: flex;
                gap: 0.1rem;
                align-items: center;
                transition: 0.2s ease-in-out;

                img{
                    width: 1rem;
                }

                &:hover{
                    background-color: rgb(250, 250, 250);
                }

                &:active{
                    background-color: rgb(240, 240, 240);
                }
            }
        }
    }

    

`