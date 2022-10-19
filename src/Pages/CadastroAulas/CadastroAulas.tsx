import { ContainerCadastroAulas } from "./style.cadastro";


export function CadastroAulas(){
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
                        placeholder="Digite o titulo" />
                    </div>
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Descrição:</label>
                        <input 
                        type="text"
                        placeholder="Digite a descrição da aula" />
                    </div>

                </div>
                <div className="container_content_2">

                    <div className="div_container_inputs">
                        <label htmlFor="">Endereço do vídeo:</label>
                        <input 
                        type="text"
                        placeholder="Cole o endereço do video"
                        />
                    </div>
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Categoria:</label>
                        <select>
                            <option>LCS</option>
                            <option>PORTAL</option>
                            <option>EAD</option>
                        </select>
                    </div>

                </div>
                <div className="container_content_3">
                    
                    <div className="div_container_inputs">
                        <label htmlFor="">Instrutor:</label>
                        <input 
                        type="text" 
                        placeholder="Instrutor" />
                    </div>

                    <div className="div_container_inputs">
                        <label htmlFor="">Curso:</label>
                        <select>
                            <option>Curso - LCS</option>
                            <option>Curso - PORTAL</option>
                            <option>Curso - EAD</option>
                        </select>
                    </div>

                </div>

                <button type="submit">Enviar</button>
            </form>
        </ContainerCadastroAulas>
    )
}