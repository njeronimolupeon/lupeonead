import { FormEvent, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EadContext } from "../../../contexts/EadContext/JornadaAndCursos/EadContext";
import { apiApp } from "../../../hooks/useApiApp";
import { ContainerCadastroAulas } from "../style.curso";


export function CadastroJornada(){

    const[titulo, setTitulo] = useState('');
    const[descricao, setDescricao] = useState('');
    const[categoria, setCategoria] = useState(0);
    
    const eadContext = useContext(EadContext);
    
    const listCategoria = [
        {id: 1, name: 'LCS'},
        {id: 2, name: 'PORTAL'},
        {id: 3, name: 'EAD'},
      ];

    useEffect(()=>{
        setCategoria(listCategoria[0].id);
    }, []);

    function onSubmitCadastroCurso(event:FormEvent){
        event.preventDefault();

        if(titulo == "" || descricao == "" || categoria == 0){
            toast.error('Preencha todos os campos antes de enviar!');
            return
        }

        const cursos = {
            jornadaId: parseInt((Math.random() * 100).toFixed(0)),
            categoria: categoria,
            titulo: titulo,
            matriculas: null,
            descricao : descricao,
            cursos: null
        }
        
        eadContext.setJornadaFunction([cursos]);
        // apiApp.post('/cursos', cursos).then((res) => {res.status});
        toast.success('Curso cadastrado com sucesso'); 
    }

    

    return(
        <div style={{padding:'1rem'}}>
        <ContainerCadastroAulas>
            <header>
                <h2>Cadastro de jornada</h2>
            </header>
            <form onSubmit={onSubmitCadastroCurso}>
                <div className="container_content_1">

                    <div className="div_container_inputs">
                        <label htmlFor="">Titulo:</label>
                        <input 
                        type="text"
                        placeholder="Digite o titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Descrição:</label>
                        <input 
                        type="text"
                        placeholder="Digite a descrição do curso"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                         />
                    </div>

                </div>
                <div className="container_content_2">

                    <div className="div_container_inputs">
                        <label htmlFor="">Categoria:</label>
                        <select onChange={(e) => {setCategoria(parseInt(e.target.value))}}>
                            {listCategoria.map(list => {
                                return (
                                    <option key={list.id} value={list.id}>{list.name}</option>
                                )
                            })}
                        </select>
                    </div>

                </div>

                <button type="submit">Enviar</button>
            </form>
        </ContainerCadastroAulas>
        </div>
    )
}