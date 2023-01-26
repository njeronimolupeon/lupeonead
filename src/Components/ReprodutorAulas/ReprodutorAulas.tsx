import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css';
import { ContainerReprodutor } from "./style.reprodutor";
import { SidebarReprodutor } from "./SidebarReprodutor";
import { Lesson } from "./Lesson";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { EadContext } from "../../contexts/EadContext/JornadaAndCursos/EadContext";
import { CursoProps } from "../../@types/curso";
import { AulaProps } from "../../@types/aula";
import { EadProvasContext } from "../../contexts/EadContext/Provas/EadProvasContext";
import { ProvaProps } from "../../@types/prova";
import { Prova } from "./Prova";


export function ReprodutorAulas(){

    const { aulaId } = useParams();
    const [curso, setCurso] = useState<CursoProps[]>([]);
    const [aulas, setAulas] = useState<CursoProps[]>([]);
    const [aulaAtiva, setAulaAtiva] = useState<CursoProps[]>([]);

    ///estados de condição da tela
    const [provaAtiva, setProvaAtiva] = useState<ProvaProps[]>([]);
    const [realizarProva, setRealizarProva] = useState(false);

    const eadContext = useContext(EadContext);
    const eadProvas = useContext(EadProvasContext);

    useEffect(() => {
        if(aulaId !== undefined){
            eadContext.cursos.map(c => {
                if(c.cursoId === parseInt(aulaId)){
                    setCurso([c]);
                }
            });

            let prova = eadProvas.provas.filter(p => p.cursoId === parseInt(aulaId));
            setProvaAtiva(prova);
        }
    }, [aulaId]);

    useEffect(() => {
        if(curso.length != 0){

            var jornadaId = curso[0].jornadaId;
            var estaJornada = eadContext.jornadas.filter(f => f.jornadaId === jornadaId);
            var aulasDestaJornada = eadContext.cursos.filter(c => c.jornadaId === estaJornada[0].jornadaId);

            if(aulasDestaJornada){
                setAulas(aulasDestaJornada);
            }

            if(aulaId != undefined){
                var aulaAtiva = aulasDestaJornada?.filter(f => f.cursoId === parseInt(aulaId));
                aulaAtiva != undefined ? setAulaAtiva(aulaAtiva) : {};
            }
        }
    }, [curso]);

    function onHandleRealizarProva(){
        setRealizarProva(!realizarProva);
    }
    
    return(
        <div style={{padding:'1rem'}}>
        <ContainerReprodutor>
            <div style={{width:'80%'}}>
                <header>
                    {realizarProva === false ? 
                        <Player style={{width:'100%', height:'100%'}}>
                            <Youtube videoId="cw7xJvL08WI">

                            </Youtube>
                            <DefaultUi />
                        </Player>
                    
                    : <Prova prova = { provaAtiva } realizarProva = {onHandleRealizarProva} />
                    }
                </header>
            </div>
            <div className="container_desc_aula">
                <div className="container_titulo_desc_aula">
                    <div className="titulo_aula">
                        <h1>{aulaAtiva[0]?.titulo}</h1>
                        <h5>{aulaAtiva[0]?.descricaoPopup}</h5>
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
                            {provaAtiva.length > 0 ?
                                <button onClick={() => setRealizarProva(!realizarProva)}>Fazer prova</button> : <div></div>
                            }
                        </div>

                        <span></span>

                        <div className="container_lessons">
                            <h4>Aulas da mesma jornada:</h4>

                            <main>
                                { aulas.map(aula => {
                                    return(
                                        <Lesson key={aula.cursoId} aulaId = {aula.cursoId} titulo={aula.titulo} ></Lesson>
                                    )
                                })}
                                
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