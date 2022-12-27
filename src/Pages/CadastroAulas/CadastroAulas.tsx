import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiApp } from "../../hooks/useApiApp";
import { ContainerCadastroAulas } from "./style.cadastro";


interface CursoProps{
    Id:number,
    Titulo:string,
    Descricao:string,
    Categoria:string
}

export function CadastroAulas(){

    const [cursos, setCursos] = useState<CursoProps[]>([]);
    const[titulo, setTitulo] = useState('');
    const[descricao, setDescricao] = useState('');
    const[urlVideo, setUrlVideo] = useState('');
    const[categoria, setCategoria] = useState('1');
    const[instrutor, setInstrutor] = useState('');
    const[cursoSelect, setCursoSelect] = useState('');

    useEffect(() =>{
        apiApp.get('/cursos').then((response) => {console.log(setCursos(response.data))});
    }, []);

    function submitCurso(){

        if(titulo !== "" && descricao !== "" && urlVideo !== "" && categoria !== "" && instrutor !== "" && cursoSelect !== ""){

            const aula = {
                Titulo: titulo,
                Descricao: descricao,
                UrlVideo: urlVideo,
                Categoria: categoria,
                Instrutor: instrutor,
                Curso: cursoSelect,
                id: Math.random()
            }

            apiApp.post('/aulas', aula).then((res) => {res.status})
            toast.success('Aula cadastrada com sucesso, ir para página de aula - ' + 'http://127.0.0.1:5173/Aulas');

        }else{
            toast.error('Preencha todos os campos antes de enviar!');
        }
            
    }

    return(
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
<<<<<<< HEAD
                         />
=======
                        value={titulo}
                        onChange={(e) => {setTitulo(e.target.value)}} />
>>>>>>> c25327f9024a2ffa40ef97b07103b4a307cffd58
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
                        <select onChange={(e) => {setCursoSelect(e.target.value)}}>
                            {cursos.map(curso => {
                                return(
                                    <option key={curso.Id} value={curso.Id}>{curso.Titulo}</option>
                                )
                            })}
                        </select>
                    </div>

                </div>

                <button type="button" onClick={submitCurso}>Enviar</button>
            </form>
        </ContainerCadastroAulas>
    )
}