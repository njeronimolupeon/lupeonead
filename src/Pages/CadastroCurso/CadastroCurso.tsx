import { ContainerCadastroAulas } from "./style.curso";


export function CadastroCurso(){
    return(
        <ContainerCadastroAulas>
            <header>
                <h2>Cadastro de curso</h2>
            </header>
            <form action="">
                <div className="container_content_1">

                    <div className="div_container_inputs">
                        <label htmlFor="">Titulo:</label>
                        <input 
                        type="text"
                        placeholder="Digite o titulo" />
                    </div>
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Descrição:</label>
                        <input 
                        type="text"
                        placeholder="Digite a descrição do curso" />
                    </div>

                </div>
                <div className="container_content_2">

                    <div className="div_container_inputs">
                        <label htmlFor="">Categoria:</label>
                        <select>
                            <option>LCS</option>
                            <option>PORTAL</option>
                            <option>EAD</option>
                        </select>
                    </div>

                </div>

                <button type="submit">Enviar</button>
            </form>
        </ContainerCadastroAulas>
    )
}