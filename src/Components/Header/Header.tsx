/*Import de imagens */
import logoLupeon from '../../assets/img_lupeon/logo_lupeon_preloader.png';

import { ContainerHeader } from "./Style.header";



export function Header({title}:{title:string}){
    return(
        <ContainerHeader>
            <div className='titulo_header'>
                <h1>{title}</h1>
            </div>
            <div className='img_fundo_header'>
                <img src={logoLupeon} alt="" />
            </div>
        </ContainerHeader>
    )
}