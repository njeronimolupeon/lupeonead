import styled from 'styled-components';

export const ContainerEditUser = styled.div`

    width: 100%;
    background-color: var(--white);
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow);
    margin:1rem;
    display: flex;
    flex-direction: column;

    h2{
        padding: 1rem;
        text-align: center;
    }

    .container_header_editUser{
        width: 100%;         
        padding: 1.5rem 1.5rem;
        display: flex;
        height: 16rem;

        .container_img_perfil{
            display: flex;
            width: 15%;
            flex-direction: column;

            .img_perfil{
                height: 11rem;
                display: flex;

                img{
                    /* border:0.2rem solid var(--azul-secundary); */
                    width:100%;
                    height: 100%;
                    padding: 0%;
                    border-radius: 0.25rem;
                }
            }
            

            input[type="file"]{
                display: none;
            }

            label{
                margin-top: 0.5rem;
                font-size: 0.775rem;
            }

            button{
                background-color: var(--azul-secundary);
                display: flex;
                align-items: center;
                justify-content: center;
                gap:0.5rem;
                border: none;
                color:var(--white);
                padding: 0.4rem;
                margin-top: 0.5rem;
                cursor: pointer;
                border-radius: 0.25rem;
                font-size: 0.775rem;
                transition: 0.2s all;

                &:hover{
                    background-color: var(--hover-azul);
                }

                &:focus{
                    background-color: var(--azul-secundary);
                }
            }
        }
    }

    .container_dados_user{
        padding: 0rem 1rem;
        width: 40%;
        p{
            font-size: 0.875rem;
            font-weight: 500;
        }

        input[type="text"]{
            margin-top: 0.5rem;
            border: 0.1rem solid var(--gray-3);
            background-color: var(--gray-2);
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
            width: 100%;

            &:focus{
                outline: none;
                border: 0.15rem solid var(--azul-secundary);
                border-radius: 0.2rem;
            }
        }

    }

`