import styled from 'styled-components';


export const ContainerLogin = styled.div`

    background-color: var(--azul-primary);
    height: 100vh;
    width: 100%;
    position: fixed;
    
    display: flex;
    align-items: center;
    justify-content: center;
    

    form{
        background-color: var(--white);
        opacity: 0.9;
        border-radius: 6px;
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
                    width: 60%;
                }

                p{
                    font-size: 0.65rem;
                }
            }

            .tt_login{
                margin: 2.5rem 0rem;

                h2{
                    font-size: 0.8rem;
                }
            }
        
        }

        main{
            width: 100%;

            .container_inputs{
                border:0.1rem solid var(--gray-3);
                border-radius:4px;
                padding: 0.4rem 0.5rem 0.1rem 0.5rem;

                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: 1rem;
                line-height: 4px;

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

            .container_fotos_input{
                margin-right: 0.5rem;

                img{
                    width: 1.1rem;
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
                        font-size: 0.6rem;
                    }
                }
            }

            .container_esquecisenha{
                display: flex;
                align-items: center;
                justify-content: right;

                span{
                    color: var(--azul-info);
                    font-weight: 600;
                    font-size: 0.6rem;

                    cursor: pointer;
                }
            }

            button[type="submit"]{
                margin-top: 2rem;
                width: 100%;
                padding: 0.5rem;
                background-color: var(--azul-info);
                color: var(--white);
                border: none;
                border-radius: 2px;
                font-size: 0.75rem;
                font-weight: 500;
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

    .container_senha{
        position: relative;
        width: 100%;
    }

    .input-image-olho{
        position: absolute;
        top: 0.4rem;
        right: 0px;
        display: flex;
        align-items: center;

        button{
            background: transparent;
            border: none;
            cursor: pointer;

            &:hover{
                opacity: 0.5;
            }

            &:active{
                opacity: 1;
            }

            &:focus{
                outline: none;
            }

            img{
                width: 1rem;
            }
        }
    }

    @media (max-width:768px){
        form{
            padding: 1rem;
        }
    }


`