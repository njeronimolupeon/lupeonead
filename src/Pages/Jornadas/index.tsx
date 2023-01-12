
import { format } from 'date-fns';
import { ContainerFilters, ContainerJornada } from "./style.jornada";
import { useState, useEffect, useRef, useContext } from 'react';
import { motion } from "framer-motion";

import seta from '../../assets/img_icones/seta_esquerda.png';
import lupa from '../../assets/img_icones/search.png';
import { Header } from "../../Components/Header/Header";
import { ContainerHome } from "../Home/Style.home";
import { Link, useNavigate } from 'react-router-dom';
import { CursoProps } from '../../@types/curso';
import { JornadaProps } from '../../@types/jornada';
import { EadContext } from '../../contexts/EadContext/EadContext';
import { Coracao } from '../../Components/SVGComponents/Coracao';



export function Jornadas(){

    const[jornadas, setJornadas] = useState<JornadaProps[]>([]);
    const[jornadasFilter, setJornadasFilter] = useState<JornadaProps[]>([]);
    const[pesquisaJornada, setPesquisaJornada] = useState('');
    const[carouselFilter, setCarouselFilter] = useState([]);
    const[filter, setFilter] = useState(1);

    const eadContext = useContext(EadContext);

    const carousel = useRef<any>([]);
    carousel.current = []

    useEffect(() => {
        setJornadasFilter(eadContext.jornadas);
    }, []);

    useEffect(() => {
        if(pesquisaJornada != ''){
            const jornadaFilter_ = eadContext.jornadas.map(jornada => {
                return (
                    {
                        jornadaId : jornada.jornadaId,
                        categoria : jornada.categoria,
                        titulo : jornada.titulo,
                        matriculas: 3,
                        descricao: jornada.descricao,
                        cursos: jornada.cursos.filter(curso => curso.cursoId === parseInt(pesquisaJornada) || curso.titulo.includes(pesquisaJornada))
                    }
                )
            });

            setJornadasFilter(jornadaFilter_);
        }else{

            setJornadasFilter(eadContext.jornadas);
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

    const navigate = useNavigate();

    function redirectForVideo(cursoId: number){
        navigate(`/Aula/${cursoId}`);
    }

    function handleFavorite(cursoId: number){
        // console.log(cursoId);

        const jornadaFilter_ = eadContext.jornadas.map(jornada => {
            return (
                {
                    jornadaId : jornada.jornadaId,
                    categoria : jornada.categoria,
                    titulo : jornada.titulo,
                    matriculas: jornada.matriculas,
                    descricao: jornada.descricao,
                    cursos: jornada.cursos.filter(curso => {
                        if(curso.cursoId === cursoId){
                            return curso.favorito = !curso.favorito
                        }else{
                            return curso;
                        }
                    })
                }
            )
        });

        setJornadasFilter(jornadaFilter_);
    }

    function filterTela(categoria: string){
        // console.log(cursoId);

        if(categoria === 'favorito'){
            const jornadaFilter_ = eadContext.jornadas.map(jornada => {
                return (
                    {
                        jornadaId : jornada.jornadaId,
                        categoria : jornada.categoria,
                        titulo : jornada.titulo,
                        matriculas: jornada.matriculas,
                        descricao: jornada.descricao,
                        cursos: jornada.cursos.filter(curso => curso.favorito === true)
                    }
                )
            });

            setJornadasFilter(jornadaFilter_);
            setFilter(2);

        }

        if(categoria === 'todas'){
            setJornadasFilter(eadContext.jornadas);
            setFilter(1);
        }
    }

    function chamandoJornada(){
        console.log('oi');
    }

    return(
        <div style={{width:'100%', padding:'1rem'}}>
            <ContainerHome>
                    <header>
                        <Header title = {"Jornadas"} />
                    </header>
                    <main>
                        <input type="text"
                        placeholder="Titulo ou Id..."
                        onChange={(e)=> {setPesquisaJornada(e.target.value)}}/>

                        <button type="button">
                            <img src={lupa} alt="Pesquisar" /></button>
                    </main>
            </ContainerHome>

            <ContainerFilters>
                <div className='container_filters'>
                    <h4>Filtrar por:</h4>
                    <button 
                    className='btn_todas'
                    onClick={() => filterTela('todas')}
                    style={filter == 1 ? {color:'white',backgroundColor:'#0c6bff'} : {backgroundColor:'rgb(240, 240, 240)'}}
                    >Todas</button>

                    <button 
                    className='btn_favoritos'
                    onClick={() => filterTela('favorito')}
                    style={filter == 2 ? {color:'white',backgroundColor:'#0c6bff'} : {backgroundColor:'rgb(240, 240, 240)'}}
                    >Favoritos</button>
                </div>
            </ContainerFilters>

            <ContainerJornada>
                <div className="jornada_row">

                    {jornadasFilter.map((jornada, index) => {
                        return(
                            <div style={{position:'relative', paddingBottom:'2.5rem'}} key={jornada.jornadaId}>
                                <Link to={`DetailJornada/${jornada.jornadaId}`} style={{textDecoration:'none', color:'black'}}>
                                    <h3 onClick={chamandoJornada}>{jornada.cursos.length >= 1 ? jornada.titulo : ''}</h3>
                                </Link>
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
                                                        <p>{curso.autor} <button type='button' onClick={() => handleFavorite(curso.cursoId)}> <Coracao fill={ curso.favorito == true ? '#0c6bff' : 'rgb(230, 230, 230)' } stroke=''/> </button></p>
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

                                                            <button type='button' onClick={() => redirectForVideo(curso.cursoId)}>Assistir</button>
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