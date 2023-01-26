import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { JornadaProps } from "../../@types/jornada";
import { EadContext } from "../../contexts/EadContext/JornadaAndCursos/EadContext";
import { apiApp } from "../../hooks/useApiApp";
import { ContainerCadastroAulas } from "./style.cadastro";


// interface CursoProps{
//     Id:number,
//     Titulo:string,
//     Descricao:string,
//     Categoria:string
// }

export function CadastroAulas(){

    const [jornadaList, setJornadaList] = useState<JornadaProps[]>([]);
    const[titulo, setTitulo] = useState('');
    const[descricao, setDescricao] = useState('');
    const[urlVideo, setUrlVideo] = useState('');
    const[categoria, setCategoria] = useState('1');
    const[instrutor, setInstrutor] = useState('');
    const[jornadaSelect, setJornadaSelect] = useState('');
    const[dificuldade, setDificuldade] = useState('1');
    const[tempoAula, setTempoAula] = useState(0);

    const eadContext = useContext(EadContext);

    useEffect(() =>{
        setJornadaList(eadContext.jornadas);
        setJornadaSelect(eadContext.jornadas[0]?.jornadaId.toString());
    }, []);

    function submitCurso(){
        if(titulo !== "" && descricao !== "" && urlVideo !== "" && categoria !== "" && instrutor !== "" && jornadaSelect !== ""){

            const aula = {
                cursoId: parseInt((Math.random() * 100).toFixed(0)),
                jornadaId: parseInt(jornadaSelect),
                dataAtualizacao: new Date(),
                titulo: titulo,
                autor: instrutor,
                cursoStatusId: 1,
                cursoStatus: 'Em aberto',
                nota: null,
                cursoDificuldadeId: parseInt(dificuldade),
                cursoDificuldade: dificuldade == '1' ? 'Iniciante' : dificuldade == '2' ? 'Intermediário' : 'Avançado',
                cursoDuracao: tempoAula,
                favorito: false,
                descricaoPopup: descricao
            }

            eadContext.setCursoFunction([aula]);

            // apiApp.post('/aulas', aula).then((res) => {res.status})
            toast.success('Aula cadastrada com sucesso!');

        }else{
            toast.error('Preencha todos os campos antes de enviar!');
        }
            
    }

    return(
        <div style={{padding:'1rem'}}>
        <ContainerCadastroAulas>
            <header>
                <h2>Cadastro de aulas</h2>
            </header>
            <form action="">
                <div className="container_content_1">
                    <div className="div_container_inputs">
                        <label htmlFor="">Titulo:</label>
                        <input 
                        type="text"
                        placeholder="Digite o titulo"
                        value={titulo}
                        onChange={(e) => {setTitulo(e.target.value)}}
                        />
                    </div>
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Descrição:</label>
                        <input 
                        type="text"
                        placeholder="Digite a descrição da aula"
                        value={descricao}
                        onChange={(e) => {setDescricao(e.target.value)}} />
                    </div>

                </div>
                <div className="container_content_2">

                    <div className="div_container_inputs">
                        <label htmlFor="">Endereço do vídeo:</label>
                        <input 
                        type="text"
                        placeholder="Cole o endereço do video"
                        value={urlVideo}
                        onChange={(e) => {setUrlVideo(e.target.value)}}
                        />
                    </div>
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Categoria:</label>
                        <select onChange={(e) => {setCategoria(e.target.value)}}>
                            <option value={1}>LCS</option>
                            <option value={2}>PORTAL</option>
                            <option value={3}>EAD</option>
                        </select>
                    </div>

                </div>
                <div className="container_content_3">
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Instrutor:</label>
                        <input 
                        type="text" 
                        placeholder="Instrutor"
                        value={instrutor}
                        onChange={(e) => {setInstrutor(e.target.value)}} />
                    </div>

                    <div className="div_container_inputs">
                        <label htmlFor="">Curso:</label>
                        <select onChange={(e) => {setJornadaSelect(e.target.value)}}>
                            {jornadaList.map(jornada => {
                                return(
                                    <option key={jornada.jornadaId} value={jornada.jornadaId}>{jornada.titulo}</option>
                                )
                            })}
                        </select>
                    </div>

                </div>
                <div className="container_content_3">
                    <div className="div_container_inputs">
                            <label htmlFor="">Dificuldade:</label>
                            <select onChange={(e) => {setDificuldade(e.target.value)}}>
                                <option value={1}>INICIANTE</option>
                                <option value={2}>INTERMEDIÁRIO</option>
                                <option value={3}>AVANÇADO</option>
                        </select>
                    </div>
                    <div className="div_container_inputs">
                        <label htmlFor="">Tempo de aula (Minutos):</label>
                        <input 
                        type="number" 
                        value={tempoAula}
                        onChange={(e) => {setTempoAula(parseInt(e.target.value))}}/>
                    </div>
                </div>

                <button type="button" onClick={submitCurso}>Enviar</button>
            </form>
        </ContainerCadastroAulas>
        </div>
    )
}