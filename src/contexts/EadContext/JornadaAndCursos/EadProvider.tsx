
import { useEffect, useState } from "react"
import { CursoProps } from "../../../@types/curso";
import { JornadaProps } from "../../../@types/jornada";
import { EadContext } from "./EadContext"

export const EadProvider = ({children}: {children: JSX.Element}) => {
    const [jornadas, setJornada] = useState<JornadaProps[]>([]);
    const [cursos, setCurso] = useState<CursoProps[]>([]);

    useEffect(() => {
        
        const jornadas = localStorage.getItem('dbEad-Jornada');
        const cursos = localStorage.getItem('dbEad-Curso');
        if(jornadas){
            let jornada_: JornadaProps[] = JSON.parse(jornadas);
            setJornada(jornada_);
        }
        if(cursos){
            let cursos_: CursoProps[] = JSON.parse(cursos);
            setCurso(cursos_);
        }

    }, []);

    function setJornadaFunction(jornadap: JornadaProps[]){
        if(jornadap){

            let jornadaParams = {
                jornadaId: jornadap[0]?.jornadaId,
                categoria: jornadap[0]?.categoria,
                titulo: jornadap[0]?.titulo,
                matriculas: jornadap[0]?.matriculas,
                descricao: jornadap[0]?.descricao,
                cursos: jornadap[0]?.cursos
            }

            const todasJornadas = jornadas.filter(f => f.jornadaId !== jornadap[0].jornadaId);
            const jornada_ = [...todasJornadas];
            jornada_.push(jornadaParams);
            
            localStorage.setItem('dbEad-Jornada', JSON.stringify(jornada_));
            setJornada(jornada_);
        }
    }

    function setCursoFunction(cursop: CursoProps[]){
        if(cursop){
            let cursoParams = {
                cursoId : cursop[0]?.cursoId,
                jornadaId: cursop[0]?.jornadaId,
                dataAtualizacao: cursop[0]?.dataAtualizacao,
                titulo: cursop[0]?.titulo,
                autor: cursop[0]?.autor,
                cursoStatusId: cursop[0]?.cursoStatusId,
                cursoStatus: cursop[0]?.cursoStatus,
                nota: cursop[0]?.nota,
                cursoDificuldadeId: cursop[0]?.cursoDificuldadeId,
                cursoDificuldade: cursop[0]?.cursoDificuldade,
                cursoDuracao: cursop[0]?.cursoDuracao,
                favorito: cursop[0]?.favorito,
                descricaoPopup: cursop[0]?.descricaoPopup
            }

            const todosCursos = cursos.filter(c => c.cursoId !== cursop[0].cursoId);
            const curso_ = [...todosCursos];
            curso_.push(cursoParams);
            localStorage.setItem('dbEad-Curso', JSON.stringify(curso_));
            setCurso(curso_);
        }
    }

    return(
        <EadContext.Provider value={{jornadas, cursos, setCursoFunction, setJornadaFunction}}>
            { children }
        </EadContext.Provider>
    )
}