import { ContainerPreloader } from "./Style.preloader";

/* Import images */

import logoLupeon from '../../assets/img_lupeon/logo_lupeon_preloader.png';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Preloader(){

    const history = useNavigate();

    useEffect(() => {
        setTimeout(() => history("/login"), 4000);
    });

    return(
        <ContainerPreloader>
            <main>
                <img src={logoLupeon} alt="Logo lupeon"/>
                <div className="container_img_mobile">
                    <div className="img_giratoria"></div>
                </div>
            </main>
        </ContainerPreloader>
    )
}