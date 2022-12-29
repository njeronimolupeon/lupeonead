
import { format } from 'date-fns';
import { ContainerJornada } from "./style.jornada";
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

import seta from '../../assets/img_icones/seta_esquerda.png';
import lupa from '../../assets/img_icones/search.png';
import { Header } from "../../Components/Header/Header";
import { ContainerHome } from "../../Components/Home/Style.home";

interface JornadaProps{
    jornadaId: number;
    categoria: number;
    titulo: string;
    cursos: CursoProps[];
}

interface CursoProps{
    cursoId: string;
    titulo: string;
    autor: string;
    dataAtualizacao: Date;
    cursoDuracao: string;
    descricaoPopup: string;
}

export function Jornadas(){

    const[jornadas, setJornadas] = useState<JornadaProps[]>([]);
    const[jornadasFilter, setJornadasFilter] = useState<JornadaProps[]>([]);
    const[pesquisaJornada, setPesquisaJornada] = useState('');
    const[carouselFilter, setCarouselFilter] = useState([]);

    const carousel = useRef<any>([]);
    carousel.current = []

    useEffect(()=>{
        const jornadas_ = [
        {
            jornadaId: 1,
            categoria: 1,
            titulo: 'Continue assistindo',
            cursos : [{
                cursoId: '20',
                titulo: 'LCS - Como cadastrar RoboCTe',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '21',
                titulo: 'LCS - Como cadastrar Colaborador',
                autor: 'Vinicius Vieira',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },
            {
                cursoId: '22',
                titulo: 'LCS - Como cadastrar Permissão',
                autor: 'Leandro',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            }
            ]
        },
        {
            jornadaId: 2,
            categoria: 2,
            titulo: 'Adicionados Recentemente',
            cursos : [{
                cursoId: '24',
                titulo: 'Portal - como executar um procedure de NFe',
                autor: 'João Batista',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '25',
                titulo: 'EAD - Como cadastrar Curso',
                autor: 'Vinicius Vieira',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },
            {
                cursoId: '26',
                titulo: 'EAD - Como cadastrar uma Jornada',
                autor: 'Nicolas Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            }
            ]
        },{
            jornadaId: 3,
            categoria: 3,
            titulo: 'Jornada 1',
            cursos : [{
                cursoId: '1',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '2',
                titulo: 'LCS - Como cadastrar chamado',
                autor: 'Vinicius Vieira',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },
            {
                cursoId: '3',
                titulo: 'LCS - Como cadastrar rotina',
                autor: 'Leandro',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },
            {
                cursoId: '4',
                titulo: 'LCS - Como cadastrar task',
                autor: 'Vinicius Silva',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            }]
        },
        {
            jornadaId: 4,
            categoria: 3,
            titulo: 'Jornada 2',
            cursos : [{
                cursoId: '5',
                titulo: 'LCS - Como cadastrar customização',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '6',
                titulo: 'LCS - Como cadastrar projeto',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '7',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '8',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '9',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '10',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            }]
        },{
            jornadaId: 5,
            categoria: 3,
            titulo: 'Jornada 3',
            cursos: [{
                cursoId: '11',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '12',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '13',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '14',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '15',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            },{
                cursoId: '16',
                titulo: 'LCS - Como cadastrar atividades',
                autor: 'Nicolas Gonçalves Jerônimo',
                dataAtualizacao: new Date(),
                cursoDuracao: '1h',
                descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
            }]
        }
        ]

        setJornadas(jornadas_);
        setJornadasFilter(jornadas_);

    },[]);

    useEffect(() => {
        if(pesquisaJornada != ''){
            const jornadaFilter_ = jornadas.map(jornada => {
                return (
                    {
                        jornadaId : jornada.jornadaId,
                        categoria : jornada.categoria,
                        titulo : jornada.titulo,
                        cursos: jornada.cursos.filter(curso => curso.cursoId === pesquisaJornada || curso.titulo.includes(pesquisaJornada))
                    }
                )
            });

            setJornadasFilter(jornadaFilter_);
        }else{
            const jornadas_ = [
                {
                    jornadaId: 1,
                    categoria: 1,
                    titulo: 'Continue assistindo',
                    cursos : [{
                        cursoId: '20',
                        titulo: 'LCS - Como cadastrar RoboCTe',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '21',
                        titulo: 'LCS - Como cadastrar Colaborador',
                        autor: 'Vinicius Vieira',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },
                    {
                        cursoId: '22',
                        titulo: 'LCS - Como cadastrar Permissão',
                        autor: 'Leandro',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    }
                    ]
                },
                {
                    jornadaId: 2,
                    categoria: 2,
                    titulo: 'Adicionados Recentemente',
                    cursos : [{
                        cursoId: '24',
                        titulo: 'Portal - como executar um procedure de NFe',
                        autor: 'João Batista',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '25',
                        titulo: 'EAD - Como cadastrar Curso',
                        autor: 'Vinicius Vieira',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },
                    {
                        cursoId: '26',
                        titulo: 'EAD - Como cadastrar uma Jornada',
                        autor: 'Nicolas Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    }
                    ]
                },{
                    jornadaId: 3,
                    categoria: 3,
                    titulo: 'Jornada 1',
                    cursos : [{
                        cursoId: '1',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '2',
                        titulo: 'LCS - Como cadastrar chamado',
                        autor: 'Vinicius Vieira',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },
                    {
                        cursoId: '3',
                        titulo: 'LCS - Como cadastrar rotina',
                        autor: 'Leandro',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },
                    {
                        cursoId: '4',
                        titulo: 'LCS - Como cadastrar task',
                        autor: 'Vinicius Silva',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    }]
                },
                {
                    jornadaId: 4,
                    categoria: 3,
                    titulo: 'Jornada 2',
                    cursos : [{
                        cursoId: '5',
                        titulo: 'LCS - Como cadastrar customização',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '6',
                        titulo: 'LCS - Como cadastrar projeto',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '7',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '8',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '9',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '10',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    }]
                },{
                    jornadaId: 5,
                    categoria: 3,
                    titulo: 'Jornada 3',
                    cursos: [{
                        cursoId: '11',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '12',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '13',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '14',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '15',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    },{
                        cursoId: '16',
                        titulo: 'LCS - Como cadastrar atividades',
                        autor: 'Nicolas Gonçalves Jerônimo',
                        dataAtualizacao: new Date(),
                        cursoDuracao: '1h',
                        descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                    }]
                }
                ]

            setJornadasFilter([...jornadas_]);
        }
    }, [pesquisaJornada])

    function addToRef (el:any){
        if(el && !carousel.current.includes(el)){
            carousel.current.push(el);
        }
        setCarouselFilter(carousel.current);
    }

    function onHandleTranslateRight(numero:number){
        
        if(carousel.current.length == 0){
            if(carouselFilter.length != 0){
                carouselFilter.map(carosel => {
                    carousel.current.push(carosel);
                })
            }
        }

        carousel.current[numero].scrollLeft += carousel.current[numero].offsetWidth;
    }

    function onHandleTranslateLeft(numero:number){

        if(carousel.current.length == 0){
            if(carouselFilter.length != 0){
                carouselFilter.map(carosel => {
                    carousel.current.push(carosel);
                })
            }
        }
        
        carousel.current[numero].scrollLeft -= carousel.current[numero].offsetWidth;
    }

    console.log(jornadasFilter);

    return(
        <div style={{width:'100%', padding:'1rem'}}>
            <ContainerHome>
                    <header>
                        <Header title = {"Jornadas"} />
                    </header>
                    <main>
                        <input type="text"
                        placeholder="Pesquisar..."
                        onChange={(e)=> {setPesquisaJornada(e.target.value)}}/>

                        <button type="button">
                            <img src={lupa} alt="Pesquisar" /></button>
                    </main>
            </ContainerHome>

            <ContainerJornada>
                <div className="jornada_row">
                    {jornadasFilter.map((jornada, index) => {
                        return(
                            <div style={{position:'relative', paddingBottom:'2.5rem'}} key={jornada.jornadaId}>
                                <h3>{jornada.cursos.length >= 1 ? jornada.titulo : ''}</h3>
                                <motion.div className="jornada_cards"
                                ref={addToRef}>
                                    <motion.div
                                    className="jornada_inner">
                                        {jornada.cursos.map(curso => {
                                            return(
                                                <div className='jornada_card' key={curso.cursoId}>
                                                    <header className='jornada_card_header'></header>
                                                    <div className='jornada_card_titulo'>
                                                        <h2>{curso.titulo} {curso.cursoId}</h2>
                                                        <p>{curso.autor}</p>
                                                    </div>

                                                    <div className='modal_popup'>
                                                        <div className='modal_popup_content'>
                                                            <div className='modal_popup_titulo'>
                                                                <h2>{curso.titulo} {curso.cursoId}</h2>
                                                                <p> {format(curso.dataAtualizacao, 'dd/MM/yyyy')} | {curso.cursoDuracao} curso completo </p>
                                                            </div>
                                                            <div className='modal_popup_descricao'>
                                                                <p>{curso.descricaoPopup }</p>
                                                            </div>

                                                            <button type='button'>Assistir</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </motion.div>
                                    
                                </motion.div>
                                
                                <button style={jornada.cursos.length > 4 ? {} : {display:'none'} } onClick={() => onHandleTranslateRight(index)} className="btn-right"><img src={seta} /></button>
                                <button style={jornada.cursos.length > 4 ? {} : {display:'none'} } onClick={() => onHandleTranslateLeft(index)} className="btn-left"><img src={seta} /></button>
                            </div>
                        )
                    })}
                </div>
            </ContainerJornada>
        </div>
    )
}