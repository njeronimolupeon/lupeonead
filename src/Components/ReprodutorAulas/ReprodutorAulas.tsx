import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css';
import { ContainerReprodutor } from "./style.reprodutor";
import { SidebarReprodutor } from "./SidebarReprodutor";

export function ReprodutorAulas(){
    return(
        <ContainerReprodutor>
            <div style={{width:'60%'}}>
                <Player style={{width:'60%'}}>
                    <Youtube videoId="VmPbKj3uekE">

                    </Youtube>
                    <DefaultUi />
                </Player>

                <div className="container_desc_aula">
                    <div className="container_titulo_desc_aula">
                        <div className="titulo_aula">
                            <h1>Titulo da aula</h1>
                            <h5>Descrição da Aula - Aula 01 como entrar no LCS</h5>
                        </div>
                        <div className="container_desc_instrutor">
                            <div className="avatar_instrutor">
                                <img src="https://github.com/njeronimo1.png" alt="Instrutor" />
                            </div>
                            <div className="nome_desc_instrutor" >
                                <h5>Nome - Instrutor</h5>
                                <p>Descrição - Cargo na Lupeon</p>
                            </div>
                        </div>
                    </div>

                    <div className="container_buttons_aula">
                        <button>Fazer QUIZ</button>
                        <button>Avaliar aula</button>
                    </div>
                </div>
            </div>

            <SidebarReprodutor />            
        </ContainerReprodutor>

    )
}