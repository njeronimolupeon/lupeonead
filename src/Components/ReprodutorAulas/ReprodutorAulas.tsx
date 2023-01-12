import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css';
import { ContainerReprodutor } from "./style.reprodutor";
import { SidebarReprodutor } from "./SidebarReprodutor";
import { Lesson } from "./Lesson";
import { useParams } from "react-router-dom";

export function ReprodutorAulas(){

    const { aulaId } = useParams();

    return(
        <div style={{padding:'1rem'}}>
        <ContainerReprodutor>
            <div style={{width:'80%'}}>
                <header>
                    <Player style={{width:'100%', height:'100%'}}>
                        <Youtube videoId="cw7xJvL08WI">

                        </Youtube>
                        <DefaultUi />
                    </Player>
                </header>
            </div>
            <div className="container_desc_aula">
                <div className="container_titulo_desc_aula">
                    <div className="titulo_aula">
                        <h1>Titulo da aula</h1>
                        <h5>Descrição da Aula - Aula 01 como entrar no LCS</h5>
                    </div>
                    <div className="container_desc_instrutor">
                        <div className="container_avatar_instrutor">
                            <div className="avatar_instrutor">
                                <img src="https://github.com/njeronimo1.png" alt="Instrutor" />
                            </div>
                            <div className="nome_desc_instrutor" >
                                <h5>Nicolas Jerônimo</h5>
                                <p>Cargo na Lupeon</p>
                            </div>
                        </div>
                        <div className="container_buttons_aula">
                            <button>Fazer prova</button>
                        </div>

                        <span></span>

                        <div className="container_lessons">
                            <h4>Aulas da mesma jornada:</h4>

                            <main>
                                <Lesson aulaId="10"></Lesson>
                                <Lesson aulaId="11"></Lesson>
                                <Lesson aulaId="12"></Lesson>
                                <Lesson aulaId="13"></Lesson>
                                <Lesson aulaId="14"></Lesson>
                                <Lesson aulaId="15"></Lesson>
                                <Lesson aulaId="16"></Lesson>
                                <Lesson aulaId="17"></Lesson>
                                <Lesson aulaId="18"></Lesson>
                                <Lesson aulaId="19"></Lesson>
                            </main>
                        </div>
                    </div>
                </div>

                
            </div>

            {/* <SidebarReprodutor />             */}
        </ContainerReprodutor>
        </div>
    )
}