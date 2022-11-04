import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiApp } from "../../../hooks/useApiApp";
import { ContainerCadastroAulas } from "../style.curso";


export function CadastroCurso(){

    const[titulo, setTitulo] = useState('');
    const[descricao, setDescricao] = useState('');
    const[categoria, setCategoria] = useState('');

    const listCategoria = [
        {id: 1, name: 'LCS'},
        {id: 2, name: 'PORTAL'},
        {id: 3, name: 'EAD'},
      ];

    useEffect(()=>{
        setCategoria(listCategoria[0].name);
    }, []);

    function onSubmitCadastroCurso(event:FormEvent){
        event.preventDefault();

        if(titulo == "" || descricao == "" || categoria == ""){
            toast.error('Preencha todos os campos antes de enviar!');
            return
        }

        const cursos = {
            Titulo: titulo,
            Descricao : descricao,
            Categoria: categoria,
            Id : Math.random()
        }

        apiApp.post('/cursos', cursos).then((res) => {res.status});
        toast.success('Curso cadastrado com sucesso');
    }

    return(
        <ContainerCadastroAulas>
            <header>
                <h2>Cadastro de curso</h2>
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
                        <select onChange={(e) => {setCategoria(e.target.value)}}>
                            {listCategoria.map(list => {
                                return (
                                    <option key={list.id} value={list.name}>{list.name}</option>
                                )
                            })}
                        </select>
                    </div>

                </div>

                <button type="submit">Enviar</button>
            </form>
        </ContainerCadastroAulas>
    )
}