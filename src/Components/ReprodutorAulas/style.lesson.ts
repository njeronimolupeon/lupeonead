import styled from 'styled-components';

export const ContainerLesson = styled.div`

    width: 100%;
    background-color: var(--gray-1);
    padding: 1rem;
    border-radius: 3px;
    transition: 0.2s all;

    &:hover{
        background-color: var(--gray-3);
        cursor: pointer;
    }

    header{
        display: flex;
        color:var(--azul-secundary);
        border: none;

        .content_header_lesson{
            display: flex;
            width: 100%;
            align-items: center;
            padding: 0rem 1rem;
            justify-content: space-between;

            h3{
                font-size: 0.775rem;
            }

            .box_departamento{
                padding: 0.2rem 0.5rem;
                border-radius: 3px;
                font-size: 0.875rem;
                font-weight: 600;
                border: 0.1rem solid var(--azul-secundary);
            }
        }
    }

`