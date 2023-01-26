import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { JornadaProps } from "../../@types/jornada";
import { EadContext } from "../../contexts/EadContext/JornadaAndCursos/EadContext";
import { ListagemHome } from "./Style.home";


export function Listagem(){

    const eadCursos = useContext(EadContext);

    const [jornada, setJornada] = useState<JornadaProps[]>([]);

    useEffect(() => {

        setJornada(eadCursos.jornadas);

    }, []);

    return(
        <ListagemHome>
            <main>
                <header>
                    <span>Cursos mais populares</span>
                    <span>Matrículas</span>
                </header>
                <div className="content_listagem_one">
                    {jornada.map(jornada => {
                        return(
                            <div key={jornada.jornadaId} style={{width:'100%', display: 'flex'}}>
                                <div className="row_listagem">
                                    <span>{jornada.titulo}</span>
                                </div>
                                <div className="row_listagem_">
                                    <span>{jornada.matriculas}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <footer>
                    <Link to={'/Jornadas'}>
                        <button type="button">Ver lista de cursos</button>
                    </Link>
                </footer>
            </main>
            <main>
                <header>
                    <span>Cursos em andamento</span>
                    <span>Progresso</span>
                </header>
                <div className="content_listagem_two">
                    {jornada.map(jornada => {
                        return(
                            <div key={jornada.jornadaId} style={{width:'100%', display: 'flex'}}>
                                <div className="row_listagem_two">
                                    <span>{jornada.titulo}</span>
                                </div>
                                <div className="row_listagem_two_progresso">
                                    <div className="fundo_barra_progress">
                                        <div className="barra_progress"></div>
                                    </div>
                                    <span>55%</span>
                                </div>
                                <div className="row_listagem_two_">
                                    <span>*</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <footer>
                    <Link to={'/Jornadas'}>
                        <button type="button">Ver lista de cursos</button>
                    </Link>
                </footer>
            </main>
        </ListagemHome>
    )
}