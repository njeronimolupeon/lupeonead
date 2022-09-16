import styled from 'styled-components';


export const ContainerLogin = styled.div`

    background-color: var(--azul-primary);
    height: 100vh;
    width: 100%;
    /* z-index: 10000; */
    position: fixed;
    
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        background-color: var(--white);
        opacity: 0.9;

        min-width: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        header{
            width: 100%;
            color: var(--azul-primary);

            div{
                width: 100%;
                text-align: center;

                img{
                    width: 50%;
                }

                p{
                    font-size: 0.5rem;
                    
                }
            }

            .tt_login{
                margin: 2.5rem 0rem;
            }
        
        }

        main{
            width: 100%;

            .container_inputs{
                border:0.1rem solid var(--gray-3);
                border-radius:4px;
                padding: 0.2rem 0.5rem 0.1rem 0.5rem;

                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: column;
                margin-bottom: 1rem;

                strong{
                    font-size: 0.55rem;
                    margin-left: 0.3rem;
                    color: var(--gray-info);
                    font-weight: 600;
                }

                input[type="text"],
                input[type="password"]
                {
                    background: transparent;
                    padding: 0.5rem 0.3rem;
                    border: none;
                    font-size: 0.65rem;
                    width: 100%;

                    &:focus{
                        outline: none;
                    }
                }
            }
        }

        footer{
            width: 100%;

            .container_footer{
                display: flex;

                div{
                    width: 50%;
                }

                .container_mantlogado{
                    display: flex;
                    align-items: center;

                    label{
                        font-weight: 600;
                        margin-left: 0.4rem;
                        color: var(--gray-info);
                        font-size: 0.7rem;
                    }
                }
            }

            .container_esquecisenha{
                display: flex;
                align-items: center;
                justify-content: center;

                span{
                    color: var(--azul-info);
                    font-weight: 600;
                    font-size: 0.7rem;

                    cursor: pointer;
                }
            }

            button[type="submit"]{
                margin-top: 2.5rem;
                width: 100%;
                padding: 0.5rem;
                background-color: var(--azul-info);
                color: var(--white);
                border: none;
                border-radius: 2px;
                font-size: 0.7rem;
                cursor: pointer;

                &:focus{
                    outline: none;
                }

                &:hover{
                    opacity: 0.9;
                }

                &:active{
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width:768px){
        form{
            padding: 1rem;
        }
    }


`