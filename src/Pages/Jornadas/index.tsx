

import { ContainerJornada } from "./style.jornada";
import { useState, useEffect, useRef, DetailedHTMLProps, HTMLAttributes } from 'react';
import { motion } from "framer-motion";

import seta from '../../assets/img_icones/seta_esquerda.png';

interface JornadaProps{
    cursoId: string;
    titulo: string;
    autor: string;
    dataAtualizacao: Date;
    cursoDuracao: string;
    descricaoPopup: string;
}

export function Jornadas(){

    const[open, setOpen] = useState(false);
    const[width, setWidth] = useState(0);
    const[jornada, setJornada] = useState<JornadaProps[]>([]);

    const carousel = useRef<any>();

    useEffect(()=>{
        const jornada_ = [{
            cursoId: '1',
            titulo: 'LCS - Como cadastrar atividades',
            autor: 'Nicolas Gonçalves Jerônimo',
            dataAtualizacao: new Date(),
            cursoDuracao: '1h',
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: '2',
            titulo: 'LCS - Como cadastrar atividades',
            autor: 'Nicolas Gonçalves Jerônimo',
            dataAtualizacao: new Date(),
            cursoDuracao: '1h',
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: '3',
            titulo: 'LCS - Como cadastrar atividades',
            autor: 'Nicolas Gonçalves Jerônimo',
            dataAtualizacao: new Date(),
            cursoDuracao: '1h',
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: '4',
            titulo: 'LCS - Como cadastrar atividades',
            autor: 'Nicolas Gonçalves Jerônimo',
            dataAtualizacao: new Date(),
            cursoDuracao: '1h',
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: '5',
            titulo: 'LCS - Como cadastrar atividades',
            autor: 'Nicolas Gonçalves Jerônimo',
            dataAtualizacao: new Date(),
            cursoDuracao: '1h',
            descricaoPopup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, tortor sed mollis lacinia, dui dolor ullamcorper odio, a tempor justo sapien a sapien.'
        },{
            cursoId: '6',
            titulo: 'LCS - Como cadastrar atividades',
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
        },{
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

        setJornada(jornada_);

    },[]);

    function onHandleTranslateRight(){
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    function onHandleTranslateLeft(){
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }


    console.log(jornada);
    return(
        <ContainerJornada>
            
            <div className="jornada_row">
                <h3>Jornada 1</h3>
                <motion.div className="jornada_cards" 
                ref={carousel}>
                    <motion.div 
                    className="jornada_inner"
                    // drag="x"
                    >
                        {jornada.map(carousel => {
                            return(
                                <div className='jornada_card' key={carousel.cursoId}>
                                    <header className='jornada_card_header'></header>
                                    <div className='jornada_card_titulo'>
                                        <h2>{carousel.titulo} {carousel.cursoId}</h2>
                                        <p>{carousel.autor}</p>
                                    </div>

                                    <div className='modal_popup'>
                                        <div className='modal_popup_content'>
                                            <div className='modal_popup_titulo'>
                                                <h2>{carousel.titulo} {carousel.cursoId}</h2>
                                                <p> {carousel.dataAtualizacao.toISOString()} | {carousel.cursoDuracao} curso completo </p>
                                            </div>
                                            <div className='modal_popup_descricao'>
                                                <p>{carousel.descricaoPopup }</p>
                                            </div>

                                            <button type='button'>Assistir</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                        
                    </motion.div>

                    
                </motion.div>
                    <button onClick={onHandleTranslateRight} className="btn-right"><img src={seta} /></button>
                    <button onClick={onHandleTranslateLeft} className="btn-left"><img src={seta} /></button>
            </div>
        </ContainerJornada>
    )
}