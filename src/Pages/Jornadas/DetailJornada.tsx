//import de imagens
import calendario from '../../assets/img_icones/calendario.png';
import relogio from '../../assets/img_icones/relogio.png';
import check from '../../assets/img_icones/check.png';
import monitor from '../../assets/img_icones/monitor_azul.png';
import quantidade from '../../assets/img_icones/quantidade.png';



import { ContainerDetailJornada } from "./style.jornada";
import { useContext, useEffect, useState } from 'react';
import { EadContext } from '../../contexts/EadContext/JornadaAndCursos/EadContext';
import { useScroll } from 'framer-motion';
import { JornadaProps } from '../../@types/jornada';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CursoProps } from '../../@types/curso';
import {format} from 'date-fns';
import { CursosLista } from '../Curso/CursoLista/CursosLista';


export function DetailJornada(){

    const eadContext = useContext(EadContext);
    const { jornadaId } = useParams();
    const navigate = useNavigate();

    const [jornada, setJornada] = useState<JornadaProps[]>([]);
    const [cursos, setCursos] = useState<CursoProps[]>([]);
    const [totalHorasJornada, setTotalHorasJornada] = useState('0');
    const [porcentagemConclusao, setPorcentagemConclusao] = useState('0');

    useEffect(() => {
        if(jornadaId != undefined){
            const filterJornada = eadContext.jornadas.filter(f => f.jornadaId === parseInt(jornadaId));
            const cursos = eadContext.cursos.filter(c => c.jornadaId === parseInt(jornadaId));

            let totalHoras = 0;
            cursos?.map(m => {
                return totalHoras = totalHoras + m.cursoDuracao});

            if(totalHoras > 60){
                totalHoras = totalHoras / 60;
                setTotalHorasJornada(totalHoras.toFixed(0).toString() + ' horas');
            }else{
                setTotalHorasJornada(totalHoras.toString() + ' minutos');
            }

            

            let totalCursos = cursos?.length;
            let totalCursosConcluidos = 0;
            
            cursos?.map(m => {
                if(m.cursoStatusId === 3){
                    totalCursosConcluidos = totalCursosConcluidos + 1;
                }
            });

            let porcentagemTotal = 0;

            if(totalCursosConcluidos != 0 && totalCursos != undefined){
                porcentagemTotal = (totalCursosConcluidos / totalCursos) * 100;
                
                setPorcentagemConclusao(porcentagemTotal.toFixed(0));
            }else{
                setPorcentagemConclusao('0');
            }

            setJornada(filterJornada);
            setCursos(cursos);
        }else{
            navigate('/Jornadas');
        }
    }, [jornadaId]);

    function redirectForVideo(cursoId: number){
        navigate(`/Aula/${cursoId}`);
    }

    console.log(porcentagemConclusao);

    return(
        <ContainerDetailJornada>
            <div className="container_content">
                <div className="content">
                    <div className="container_infogeral_jornada">
                        <div className="img_jornada"></div>
                        
                        <div className="content_infogeral_jornada">
                            <h3>{jornada[0]?.titulo}</h3>

                            <div className="container_desc_infogeral_jornada">
                                <p>{jornada[0]?.descricao}</p>
                            </div>

                            <div className="container_progresso_infogeral_jornada">
                                <h3>Nível de progressão deste curso: {porcentagemConclusao} %</h3>
                                <div className='container_barraprogressao'>
                                    <div className='barra_progressao' style={{backgroundColor:'var(--azul-secundary)', width:`${porcentagemConclusao}%`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container_lista_aulas'>
                        <main>
                            <header>
                                <h3>Lista de aulas</h3>
                            </header>
                            <div className='container_table_aulas'>
                                <header>
                                    <p>Titulo</p>
                                    <p>Duração</p>
                                    <p>Data</p>
                                    <p>Assistido</p>
                                    <p>Tipo</p>
                                </header>
                                <div className='container_content_lista_aulas'>
                                    <div className='content_lista_aulas'>
                                        {cursos?.map(cursos => {
                                            return(
                                                <div className='aula' key={cursos.cursoId}>
                                                    <p onClick={() => redirectForVideo(cursos.cursoId)} className='titulo'>{cursos.titulo}</p>
                                                    <p><img src={relogio} alt="" /> {cursos.cursoDuracao > 60 ? (cursos.cursoDuracao / 60).toFixed(0) + 'h' : cursos.cursoDuracao + ' minutos'}</p>
                                                    <p><img src={calendario} alt="" /> {format(Date.parse(cursos.dataAtualizacao.toString()), 'dd/MM/yyyy')} </p>
                                                    <p><img src={check} alt="" /> {cursos.cursoStatusId == 3 ? 'Finalizado' : 
                                                    cursos.cursoStatusId == 2 ? 'Em andamento' : 'Em aberto'}</p>
                                                    <p><img src={monitor} alt="" /> Aula</p>
                                                </div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="container_dados_jornada">
                    <div className='container_content_dados_jornada'>
                        <h3>Seus dados do curso</h3>
                        <div className='container_desc_dados_jornada'>
                            <main>
                                <img src={calendario} alt="" />
                                <div>
                                    <p>DATA DE INÍCIO</p>
                                    <span>24/12/2022</span>
                                </div>
                            </main>
                            <main>
                                <img src={relogio} alt="" />
                                <div>
                                    <p>Duração:</p>
                                    <span>{totalHorasJornada}</span>
                                </div>
                            </main>
                            <main>
                                <img src={quantidade} alt="" />
                                <div>
                                    <p>QUANTIDADE DE AULAS:</p>
                                    <span>{cursos?.length}</span>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerDetailJornada>
    )

}