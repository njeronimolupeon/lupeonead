import styled from 'styled-components';

export const ContainerSidebar = styled.div`
    display: flex;
    position: relative;

    .container_sidebar,
    .container_sidebar_mobile{
        height: 100vh;
        width: 3.5rem;
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
            width: 3.5rem;
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
                width: 2rem;
            }

            strong{
                font-size: 0.7rem;
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
        width: 3rem;
        position: relative;

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;

            img{
                width:1.3rem;
            }

            .circulo_nome{
                background-color: var(--success);
                /* position: absolute; */
                padding: 0.5rem 0.5rem;
                text-align: center;
                border-radius: 50%;

                label{
                    font-size: 0.75rem;
                    font-weight: 500;
                }
            }
            
        }
    }

    .menu_hamburguer_mobile{

        .menu {
            position: fixed;
            left: 0.3rem;
            z-index: 50000;
        }

        .hamburguer {
            position: relative;
            display: block;
            background: #0f418a;
            width: 30px;
            height: 2px;
            top: 0.2rem;
            left: 0.3rem;
            transition: 0.5s ease-in-out;
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

        button{
            background-color: transparent;
            border: none;
        }

        @media (min-width:768px){
            display: none;
        }


    }
    
`

export const ContainerSidebarMenu = styled.div`
    transition: 0.2s all;

    .sidebar-menu{
        
        width: 10rem;
        height: 97vh;
        background-color: var(--azul-primary);
        position: absolute;
        left: 5rem;
        top: 1rem;
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
            font-size: 0.875rem;
            padding: 1rem;
            border-bottom: 0.1rem solid var(--gray-3);            
            width: 100%;

            &:hover{
                background-color: rgba(255, 255, 255, 0.2);
            }
        }
        
    }
    

`



// export const SidebarMenuResponsive = styled.div`



// `