import styled from 'styled-components';

export const ContainerSidebar = styled.div`
    display: flex;
    position: relative;
    width: 100%;

    .container_sidebar,
    .container_sidebar_mobile{
        height: 100vh;
        width: 100%;
        background-color: var(--gray-2);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        transition: 0.2s all ;

        padding: 1rem 2%;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;    

        
    }

    .container_sidebar{
        @media (max-width:768px){
            display: none;
        }
    }
    

    header{
        display: flex;
        align-items: center;
        justify-content: center;
    
        img{
            width: 2.5rem;
        }
    }

    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 4rem;

        div{
            line-height: 8px;
            margin-bottom: 2rem;
            cursor: pointer;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            

            img{
                width: 1.8rem;
            }

            strong{
                margin-top: 0.32rem;
                font-size: 0.6rem;
                text-transform: uppercase;
                color: var(--azul-primary);
            }

            &:hover{
                opacity: 0.7;
                /* background-color: var(--azul-complementary_); */
            }

            &:active{
                opacity: 1;
            }
        }

    }

    footer{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 50%;
        bottom: 2rem;
        width: 3rem;
        position: absolute;

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
            position: relative;

            img{
                width:1rem;
            }

            .circulo_nome{
                background-color: var(--success);
                /* position: absolute; */
                padding: 0.5rem 0.5rem;
                text-align: center;
                border-radius: 50%;
                cursor: pointer;

                label{
                    font-size: 0.75rem;
                    font-weight: 500;
                    cursor: pointer;
                }

                &:hover{
                    filter: brightness(0.8);
                }

                &:active{
                    filter: brightness(1);
                }
            }
            
        }
    }

    .menu_hamburguer_mobile{

        .container_sidebar_mobile{
            position: absolute;
            top: 0;
            z-index: 10000;

            header{
                margin-top: 2.5rem;
                margin-bottom: 0rem;
            }
            main{
                margin-top:4rem;
                margin-bottom: 0px;
            }
        }

    }

    .btn_abrirfechar_menumob{
        
        background-color: transparent;
            border: none;
            margin-top: 1.6rem;
            position: absolute;
            box-shadow: var(--box-shadow);

            .menu {
            position:relative;
            left: 0.2rem;
            z-index: 50000;
            box-shadow: var(--box-shadow);
        }

        .hamburguer {
            position: relative;
            display: block;
            background: #0f418a;
            width: 25px;
            height: 2px;
            top: 0.2rem;
            left: 0.8rem;
            transition: 0.5s ease-in-out;
            box-shadow: var(--box-shadow);
        }

        .hamburguer:before,
        .hamburguer:after {
        background: #0f418a;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.5s ease-in-out;
        box-shadow: var(--box-shadow);
        }

        .hamburguer:before {
        top: -10px;
        }

        .hamburguer:after {
        bottom: -10px;
        }

        input {
            display: none;
        }

        input:checked ~ label .hamburguer {
            transform: rotate(45deg);
        }

        input:checked ~ label .hamburguer:before {
            transform: rotate(90deg);
            top: 0;
        }

        input:checked ~ label .hamburguer:after {
            transform: rotate(90deg);
            bottom: 0;
        }

        @media (min-width:768px){
            display: none;
        }
    }

    /* Modal user */

    
    
`

export const ContainerSidebarMenu = styled.div`
    transition: 0.2s all;
    left: 6.1rem;
    position: absolute;
    z-index: 1;
    top: 1rem;

    .sidebar-menu{
        width: 8rem;
        height: 97vh;
        background-color: var(--azul-primary);
        
        
        
        color: var(--white);
        box-shadow: var(--boxshadow);


        .sidebar-menu-content{
            position: relative;

            button{
                background-color: transparent;
                padding: 0px;
                border: none;
                position: absolute;
                top:5px;
                right: 5px;
                cursor: pointer;
                
                img{
                    width: 1rem;
                }
            }
        }

        
        
        
    }

    .subtitulos_menu{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            text-decoration: none;
            text-align: center;
            color: var(--white);
            font-size: 0.775rem;
            padding: 1rem;
            border-bottom: 0.1rem solid var(--gray-3);            
            width: 100%;

            &:hover{
                background-color: rgba(255, 255, 255, 0.2);
            }
        }
        
    }
    

`
