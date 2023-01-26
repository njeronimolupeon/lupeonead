
import { useEffect, useState } from "react"
import { CursoProps } from "../../@types/curso";
import { JornadaProps } from "../../@types/jornada";
import { EadContext } from "./EadContext"

export const EadProvider = ({children}: {children: JSX.Element}) => {
    const [jornadas, setJornada] = useState<JornadaProps[]>([]);
    const [cursos, setCurso] = useState<CursoProps[]>([]);

    useEffect(() => {
        const jornadas_ = [
            {
                jornadaId: 1,
                categoria: 1,
                titulo: 'Continue assistindo',
                matriculas: 3,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.',
                cursos : [{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date('2000-03-03'),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar Rotina',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Finalizado',
                    nota: 6,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : true,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },
                {
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar Chamado',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Em andamento',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                }
                ]
            },
            {
                jornadaId: 2,
                categoria: 2,
                titulo: 'Adicionados Recentemente',
                matriculas: 3,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.',
                cursos : [{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date('2000-03-03'),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 3,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 3,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : true,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },
                {
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                }
                ]
            },{
                jornadaId: 3,
                categoria: 3,
                titulo: 'Jornada 1',
                matriculas: 3,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.',
                cursos : [{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : true,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 2,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 2,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 2,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                }]
            },
            {
                jornadaId: 4,
                categoria: 3,
                titulo: 'Jornada 2',
                matriculas: 1,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.',
                cursos : [{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 3,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : true,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 3,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 3,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                }]
            },{
                jornadaId: 5,
                categoria: 3,
                titulo: 'Jornada 3',
                matriculas: 5,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.',
                cursos: [{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : true,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                },{
                    cursoId: Math.round(Math.random() * 1000),
                    dataAtualizacao: new Date(),
                    titulo: 'LCS - Como cadastrar RoboCTe',
                    autor: 'Nicolas Gonçalves Jerônimo',
                    cursoStatusId: 1,
                    cursoStatus: 'Aberto',
                    nota: null,
                    cursoDificuldadeId: 1,
                    cursoDificuldade: 'iniciante',
                    cursoDuracao: '1h',
                    favorito : false,
                    descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
                }]
            }
            ]
        
        setJornada(jornadas_);

        const cursos_ = [{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 1,
            cursoStatus: 'Aberto',
            nota: 4,
            cursoDificuldadeId: 1,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar Rotina',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 2,
            cursoStatus: 'Finalizado',
            nota: 6,
            cursoDificuldadeId: 2,
            cursoDificuldade: 'intermediario',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },
        {
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar Chamado',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 1,
            cursoStatus: 'Em andamento',
            nota: 8,
            cursoDificuldadeId: 2,
            cursoDificuldade: 'intermediario',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 3,
            cursoStatus: 'Aberto',
            nota: 10,
            cursoDificuldadeId: 3,
            cursoDificuldade: 'avancado',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 1,
            cursoStatus: 'Aberto',
            nota: 5,
            cursoDificuldadeId: 1,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },
        {
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 3,
            cursoStatus: 'Aberto',
            nota: 2,
            cursoDificuldadeId: 3,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 1,
            cursoStatus: 'Aberto',
            nota: 3,
            cursoDificuldadeId: 2,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : true,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 2,
            cursoStatus: 'Aberto',
            nota: 5,
            cursoDificuldadeId: 3,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 3,
            cursoStatus: 'Aberto',
            nota: 10,
            cursoDificuldadeId: 1,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 2,
            cursoStatus: 'Aberto',
            nota: 7,
            cursoDificuldadeId: 1,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: Math.random() * 1000,
            dataAtualizacao: new Date(),
            titulo: 'LCS - Como cadastrar RoboCTe',
            autor: 'Nicolas Gonçalves Jerônimo',
            cursoStatusId: 1,
            cursoStatus: 'Aberto',
            nota: 6,
            cursoDificuldadeId: 1,
            cursoDificuldade: 'iniciante',
            cursoDuracao: '1h',
            favorito : false,
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        }
        ]

        setCurso(cursos_);

    }, []);

    function setJornadaFunction(jornadap: JornadaProps[]){
        if(jornadap){
            const jornada_ = {...jornadas, jornadap}
            setJornada(jornada_);
        }
    }

    function setCursoFunction(cursop: CursoProps[]){
        if(cursop){
            const curso_ = {...cursos, cursop};
            setCurso(curso_);
        }
    }

    return(
        <EadContext.Provider value={{jornadas, cursos, setCursoFunction, setJornadaFunction}}>
            { children }
        </EadContext.Provider>
    )
}