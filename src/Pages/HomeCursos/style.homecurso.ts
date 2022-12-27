import styled from  'styled-components';

export const ContainerHomeCursos = styled.div`
    width: 100%;
    padding: 1rem;
    margin: 1rem;

    header{
        width: 60%;
        box-shadow: var(--boxshadow);
    }

    main{
        background-color: var(--white);
        padding: 1rem;
        margin: 1rem 0rem;
        border-radius: 8px;
        box-shadow: var(--boxshadow);

        .container_box{
            width: 100%;
            margin: 0rem 0rem 1rem 0rem;
            gap: 1rem;
            padding: 2rem;
            display: flex;
            

            .box-primary{
                width: 100%;
                
                
                padding: 3rem;
                border-radius: 3px;
                margin: 0.5rem;
                transition: 0.5s ease-in-out;
                cursor: pointer;
                

                &:hover{
                    opacity:0.8 ;
                    background: var(--azul-secundary);
                    color: var(--white);
                }
            }
        }
    }
`