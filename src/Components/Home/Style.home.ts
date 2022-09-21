import styled from 'styled-components';


export const ContainerHome = styled.div`
    display: flex; 
    width: 100%;

    header{
        width: 60%; 
        margin-left: 1rem;
        margin-top: 1rem
    }

    main{
        width: 40%;
        border-radius: 8px;
        margin: 1rem 1rem 0rem 1rem;
        padding: 0rem 1rem;
        background: var(--white);
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input[type="text"]{
            background-color: transparent;
            padding: 0.1rem;
            font-size: 0.775rem;
            font-weight: 600;
            border: none;

            &:focus{
                outline: none;
            }
        }

        button[type="button"]{
            background: transparent;
            border: none;
            transition: 0.2s all;
            cursor: pointer;

            &:focus{
                outline: none;
            }

            &:hover{
                opacity: 0.5;
            }

            &:active{
                opacity: 1;
            }
        }
    }

        
`

export const ContainerChartHome = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    padding: 1rem;

    

    .container_chart_1{
        width: 20%;
        padding:  0rem 0.5rem;
        display: flex;
        justify-content: space-between;

        background-color: var(--white);
        border-radius: 8px;
        box-shadow: var(--box-shadow);

        .conteudo_chart_1{
            width: 50%;
            padding: 1rem 0rem 0rem 0rem;

            .legend_grafic_1{
                display: flex;

                flex-direction:column;
                font-size: 0.675rem;
                width: 50%;
                
                span{
                    margin: 0.3rem 0rem;
                    height: 0.2rem;
                }
            }
        }
        
        
    }
`