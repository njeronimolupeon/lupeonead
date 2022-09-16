import styled from 'styled-components';

export const ContainerSidebar = styled.div`
    display: flex;
    position: relative;

    .container_sidebar{
        height: 100vh;
        width: 5rem;
        background-color: var(--gray-2);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        padding: 1rem 2%;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;    
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