import styled from 'styled-components';

export const ContainerSidebarReprodutor = styled.div`
    width: 40%;
    background-color: whitesmoke;
    margin-left:1rem ;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 3px;

    header{
        width: 90%;
        display: flex;
        margin: 0rem 1.4rem;
        padding: 0.5rem 0rem;
        
        border-bottom: 0.05rem solid var(--gray-1);

        h1{
            text-align: left;
            font-size: 1.5rem;
            color: var(--azul-secundary);
        }
    }

`