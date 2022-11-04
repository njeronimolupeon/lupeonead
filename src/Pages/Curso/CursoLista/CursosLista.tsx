import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../Components/Header/Header";
import { apiApp } from "../../../hooks/useApiApp";
import { ContainerCursosLista } from "./style.cursolista";
import dowload from '../../../assets/img_icones/icon-download.svg';
import voltar from '../../../assets/img_icones/voltar.svg';

interface CursoProps{
    Titulo: string,
    Descricao: string,
    Categoria: string,
    Id: number
}

export function CursosLista(){

    const[cursos, setCursos] = useState<CursoProps[]>([]);

    useEffect(() => {

        apiApp.get('/cursos').then((response) => {setCursos(response.data)});

    }, []);

    console.log(cursos);

    return(
            
        <ContainerCursosLista>
            <header>
                <main>
                    <Header title="Cursos"/>
                </main>
                <Link to={"/HomeCursos"} style={{width:'10%', textDecoration:'none'}}>
                    <button>
                   <img src={voltar} alt="voltar" />Home</button>
                </Link>
            </header>

            
            <main>
                <table className="table_cursos">
                    <thead className="header_table_cursos" >
                        {/* <h2>Lista de cursos</h2> */}
                        <tr>
                            <td>
                                <p>Titulo</p> 
                            </td>
                            <td><p>Descrição</p></td>
                            <td><p>Categoria</p></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {cursos.map(curso =>{
                            return(
                                <tr key={curso.Id}>
                                    <td>{curso.Titulo}</td>
                                    <td>{curso.Descricao}</td>
                                    <td>{curso.Categoria}</td>
                                </tr>
                            )
                            })
                        }
                        
                    </tbody>

                    
                </table>

                <footer>
                    <div className="container_btn_exportar">
                        <button type="button">
                            <img src={dowload} alt="download" /> Exportar</button>
                    </div>
                    <div></div>
                </footer>
            </main>
        </ContainerCursosLista>
    )
}