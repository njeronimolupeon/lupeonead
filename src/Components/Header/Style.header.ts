
import styled from 'styled-components';
import imgFundoHeader from '../../assets/img_icones/negocios.png';

export const ContainerHeader = styled.div`

    width: 100%;
    height: 3rem;
    display: flex;
    background-color: var(--white);
    border-radius: 8px;

    .titulo_header{
        width: 40%;
        font-size: 0.6rem;
        padding-left: 1rem;
        display: flex;
        align-items: center;
    }

    .img_fundo_header{
        background-image: url(${imgFundoHeader});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
        -webkit-mask-image: linear-gradient(to right, transparent 10%, #1855ae 90% , #1855ae 100%);
        background-color: #2358a4;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3rem;

        border-radius: 6px;

        img{
            width: 8rem;
        }
    }

    @media (max-width:768px){
        .img_fundo_header{
            img{
                display: none;
            }
        }
        
    }

    @media(min-width:1400px){
        height: 3rem;
    }

`