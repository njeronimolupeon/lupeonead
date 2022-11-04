import { Link } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { ContainerHomeCursos } from "./style.homecurso";


export function HomeCursos(){
    return(
        <ContainerHomeCursos>
            <header>
                <Header title="Cursos"/>
            </header>
            <main>
                <div className="container_box">
                    <Link to={'/CadastroCurso'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Cadastro de cursos</div>
                    </Link>
                    <Link to={'/CadastroAulas'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Cadastro de aulas</div>
                    </Link>
                    <Link to={'/CadastroCurso'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Cadastro de quiz</div>
                    </Link>
                </div>
                <div className="container_box">
                    <Link to={'/Cursos'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">
                            Cursos
                        </div>
                    </Link>
                    <Link to={'/HomeCursos'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Quiz cadastrados</div>
                    </Link>
                    <Link to={'/Aulas'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Aulas</div>
                    </Link>
                </div>
            </main>
        </ContainerHomeCursos>
    )
}