import styled from 'styled-components';


export const ContainerPreloader = styled.div`

    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: var(--azul-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);

    main{
        max-width: 400px;
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img{
            width: 50%;
        }
        
        .container_img_mobile{
            position: absolute;
            right: 36%;
            transform: scale(3);
            
        }

        .img_giratoria{
            animation: is-rotating 1s infinite;

            border: 2px solid #e5e5e5;
            border-radius: 50%;
            border-top-color: #4da3ff;
            height: 0.75rem;
            width: 0.75rem;
            
        }

    }

    @keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
}

`