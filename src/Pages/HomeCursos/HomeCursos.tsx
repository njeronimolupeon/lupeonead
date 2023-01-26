import { Link } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { ContainerHomeCursos } from "./style.homecurso";


export function HomeCursos(){
    return(
        <ContainerHomeCursos>
            <header>
                <Header title="Telas de cadastro"/>
            </header>
            <main>
                <div className="container_box">
                    <Link to={'/CadastroJornada'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Cadastro de Jornada</div>
                    </Link>
                    <Link to={'/CadastroAulas'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Cadastro de aulas</div>
                    </Link>
                    <Link to={'/CadastroAvaliacao'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Cadastro de avaliações</div>
                    </Link>
                </div>
                <div className="container_box">
                    <Link to={'/CadastroResposta'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">
                            Cadastro de respostas
                        </div>
                    </Link>
                    {/* <Link to={'/HomeCursos'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Quiz cadastrados</div>
                    </Link>
                    <Link to={'/Aulas'} style={{width:'33%', textDecoration:'none'}}>
                        <div className="box-primary">Aulas</div>
                    </Link> */}
                </div>
            </main>
        </ContainerHomeCursos>
    )
}