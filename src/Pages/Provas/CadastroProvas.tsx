import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CursoProps } from "../../@types/curso";
import { PerguntaProps } from "../../@types/prova";
import { EadContext } from "../../contexts/EadContext/JornadaAndCursos/EadContext";
import { EadProvasContext } from "../../contexts/EadContext/Provas/EadProvasContext";
import { ContainerProvas } from "./style.provas";

/////img
import lixeira from '../../assets/img_icones/lixeira.png';

export function CadastroProvas(){

    ///Estados contexto
    const [cursos, setCursos] = useState<CursoProps[]>([]);
    const [perguntasOrNot, setPerguntasOrNot] = useState(false);
    
    ///Estados para envio de formulário
    ///Prova
    const [cursoId, setCursoId] = useState(0);
    const [tituloProva, setTituloProva] = useState('');
    const [descricaoProva, setDescricaoProva] = useState('');
    const [notaCorteProva, setNotaCorte] = useState(0);

    ///Pergunta
    const [perguntas, setPerguntas] = useState<PerguntaProps[]>([]);
    const [perguntaTitulo, setPerguntaTitulo] = useState('');

    ///Contextos
    const eadContext = useContext(EadContext);
    const eadProvas = useContext(EadProvasContext);

    useEffect(() => {
        setCursos(eadContext.cursos);
        setCursoId(eadContext.cursos[0].cursoId);
    }, []);

    function onSubmitProva(){
        if(cursoId == 0 || tituloProva === '' || descricaoProva === '' || notaCorteProva === 0){
            toast.error('Preencha todos os campos da prova antes de enviar...');
            return;
        }

        if(perguntasOrNot == true){
            if(perguntas.length == 0){
                toast.error('Adicione ao menos uma pergunta para salvar, caso queira salvar somente a prova, desmarque o checkbox!');
                return;
            }

            let prova = {
                provaId: parseInt((Math.random() * 100).toFixed(0)),
                cursoId: cursoId,
                titulo: tituloProva,
                descricao: descricaoProva,
                notaCorte: notaCorteProva
            }
            
            eadProvas.setProvaAndPergunta([prova], perguntas);

            setTituloProva('');
            setDescricaoProva('');
            setNotaCorte(0);
            setPerguntaTitulo('');
            setPerguntas([]);
            

        }else {
            let prova = {
                provaId: parseInt((Math.random() * 100).toFixed(0)),
                cursoId: cursoId,
                titulo: tituloProva,
                descricao: descricaoProva,
                notaCorte: notaCorteProva
            }
    
            eadProvas.setProva([prova]);
        }

        
        toast.success('Cadastro efetuado com sucesso!');

    }

    function handlePerguntas(){
        if(perguntaTitulo == ''){
            toast.error('Preencha todos os campos da pergunta!');
            return
        }

        let pergunta = {
            provaId: parseInt((Math.random() * 100).toFixed(0)),
            perguntaId: parseInt((Math.random() * 100).toFixed(0)),
            titulo: perguntaTitulo,
        }

        setPerguntas([...perguntas, pergunta]);

        setPerguntaTitulo('');

        ///envio da pergunta ao array de perguntas
    }

    function handleDeletePergunta(perguntaId: number){
        let perguntaDelete = perguntas.filter(p => p.perguntaId !== perguntaId);

        setPerguntas(perguntaDelete);
    }

    return(
        <ContainerProvas>
            <div className="container_global">
                <header>
                    <h2>Cadastro de avaliação</h2>
                </header>
                <form>
                    <h4>Prova:</h4>
                    <div className="container_content_2">
                        <div className="div_container_inputs">
                            <label htmlFor="">Titulo:</label>
                            <input 
                            type="text"
                            placeholder="Digite o titulo"
                            value={tituloProva}
                            onChange={(e) => setTituloProva(e.target.value)}
                            />
                        </div>
                        <div className="div_container_inputs">
                            <label htmlFor="">Curso:</label>
                            <select onChange={(e) => {setCursoId(parseInt(e.target.value))}}>
                                {cursos.map(c => {
                                    return (
                                        <option key={c.cursoId} value={c.cursoId}>{c.titulo}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="container_content_2">
                        <div className="div_container_inputs">
                            <label htmlFor="">Nota mínima:</label>
                            <input 
                            type="number"
                            placeholder="Digite a nota de corte"
                            value={notaCorteProva}
                            onChange={(e) => setNotaCorte(e.target.valueAsNumber)}
                            />
                        </div>
                    </div>
                    <div className="container_content_descricao">

                        <div className="div_container_inputs">
                            <label htmlFor="">Descrição:</label>
                            <textarea 
                            placeholder="Digite a descrição do curso"
                            value={descricaoProva}
                            onChange={(e) => setDescricaoProva(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="container_perguntasOrNot">
                        <p>Cadastrar perguntas para esta prova? <input type="checkbox" onChange={() => setPerguntasOrNot(!perguntasOrNot)}/> </p>
                    </div>

                    
                    {/* Só aparece se marcar como true, se não preencher não interfere em nada no cadastro, pois é separado... */}

                    {perguntasOrNot == true ? 
                        <div className="container_perguntas">
                            <h4>Perguntas:</h4>
                            <div className="container_content_pergunta">
                                
                                    <textarea 
                                    placeholder="Digite o titulo"
                                    value={perguntaTitulo}
                                    onChange={(e) => setPerguntaTitulo(e.target.value)}
                                    />

                                <button 
                                type="button" 
                                className="btn-salvar-pergunta"
                                onClick={handlePerguntas}
                                >salvar</button>
        
                            </div>
                            <div className="container_list_perguntas">
                                {perguntas.length > 0 ? <header>
                                    <p>Titulo</p>
                                </header> : <div></div>}
                                {perguntas.map(p => {
                                    return(
                                        <div key={p.provaId} className="linha_list_perguntas">
                                            <span>{p.titulo}</span>
                                            <button 
                                            type="button" 
                                            className="btn_lixeira"
                                            onClick={() => handleDeletePergunta(p.perguntaId)}>
                                                <img src={lixeira} alt="" />
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    : <div></div>}

                    <button className="button_submit" type="button" onClick={onSubmitProva}>Enviar</button>

                </form>
                {/* 
                    
                 */}
            </div>
        </ContainerProvas>
    )
}