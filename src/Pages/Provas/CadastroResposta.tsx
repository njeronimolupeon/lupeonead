import { useContext, useEffect, useState } from "react";
import { EadProvasContext } from "../../contexts/EadContext/Provas/EadProvasContext";
import { ContainerProvas } from "./style.provas";
import { PerguntaProps, RespostaProps } from "../../@types/prova";
import { toast } from "react-toastify";

/////img
import lixeira from '../../assets/img_icones/lixeira.png';


export function CadastroResposta(){

    const eadProva = useContext(EadProvasContext);

    const [perguntas, setPerguntas] = useState<PerguntaProps[]>([]);

    //list para mandar pro banco
    const [respostas, setRespostas] = useState<RespostaProps[]>([]);

    //dados para inserir na lista de resposta
    const [perguntaId, setPerguntaId] = useState(0);
    const [respostaTitulo, setRespostaTitulo] = useState('');
    const [respostaCorrect, setRespostaCorrect] = useState(false);

    useEffect(() => {
        setPerguntas(eadProva.perguntas)
        setPerguntaId(eadProva.perguntas[0]?.perguntaId);
    }, []);

    function onHandleResposta(){
        if(respostaTitulo == ""){
            toast.error("Preencha ao menos o titulo da resposta!");
            return;
        }

        let resposta_ = {
            respostaId: parseInt((Math.random() * 100).toFixed(0)),
            perguntaId: perguntaId,
            resposta: respostaTitulo,
            isCorreto: respostaCorrect
        };

        setRespostas([...respostas, resposta_]);
        setRespostaTitulo('');
        
    }

    function onSubmitResposta(){
        if(respostas.length == 0){
            toast.error("Preencha ao menos o titulo da resposta!");
            return;
        }

        eadProva.setResposta(respostas);
        toast.success('Respostas adicionadas com sucesso!');
    }

    function handleDeleteRespostas(respostaId: number){
        let respostaDelete = respostas.filter(r => r.respostaId !== respostaId);

        setRespostas(respostaDelete);
    }

    return(
        <ContainerProvas>
            <div className="container_global">
                <header>
                    <h2>Cadastro de respostas</h2>
                </header>
                <form>
                    <div className="container_content_respostas">
                        <div className="div_container_inputs">
                            <label htmlFor="">Pergunta:</label>
                            <select onChange={(e) => {setPerguntaId(parseInt(e.target.value))}}>
                                {perguntas.map(p => {
                                    return (
                                        <option key={p.perguntaId} value={p.perguntaId}>{p.titulo}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="div_container_inputs">
                            <label htmlFor="">Resposta:</label>
                            <textarea 
                            placeholder="Digite o titulo"
                            value={respostaTitulo}
                            onChange={(e) => setRespostaTitulo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="container_perguntasOrNot">
                        <p>Esta resposta está correta? <input type="checkbox" onChange={() => setRespostaCorrect(!respostaCorrect)}/> </p>
                        <button className="button_salvar_resposta" type="button" onClick={onHandleResposta}>Salvar</button>
                    </div>

                    

                    {/* Só aparece se marcar como true, se não preencher não interfere em nada no cadastro, pois é separado... */}

                    {respostas.length > 0 ? 
                        <div className="container_perguntas">
                            <div className="header_list_respostas">
                                <h4>Respostas:</h4>
                                <h4>Correta:</h4>
                            </div>
                            <div className="container_list_perguntas">
                                {respostas.map(r => {
                                    return(
                                        <div key={r.respostaId} className="linha_list_perguntas">
                                            <span className="span_1">{r.resposta}</span>
                                            <span className="span_2">{r.isCorreto == true? 'Sim' : 'Não'}</span>
                                            <button 
                                            type="button" 
                                            className="btn_lixeira"
                                            onClick={() => handleDeleteRespostas(r.respostaId)}>
                                                <img src={lixeira} alt="" />
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    : <div></div>}

                    <button className="button_submit" type="button" onClick={onSubmitResposta}>Enviar</button>                   

                </form>
            </div>
        </ContainerProvas>
    )
}