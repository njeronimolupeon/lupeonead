import { useContext, useEffect, useState } from "react";
import { PerguntaProps, ProvaProps, RespostaProps } from "../../@types/prova";
import { EadProvasContext } from "../../contexts/EadContext/Provas/EadProvasContext";
import { ContainerProva } from "./style.prova";

//img
import close from '../../assets/img_icones/close.png';

interface ProvaProps_{
    prova : ProvaProps[];
    realizarProva: () => void;
}

export function Prova( {prova, realizarProva} : ProvaProps_){

    ///estados de lista para tela
    const [perguntas, setPerguntas] = useState<PerguntaProps[]>([]);
    const [respostas, setRespostas] = useState<RespostaProps[]>([]);

    const eadProva = useContext(EadProvasContext);

    useEffect(() => {
        let perguntas = eadProva.perguntas.filter(p => p.provaId === prova[0].provaId);
        setPerguntas(perguntas);

        let respostas = eadProva.respostas;
        setRespostas(respostas);
    }, []);
    
    return(
        <ContainerProva>
            <header className="header_prova">
                <h2>{prova[0]?.titulo}</h2>
                <p>{prova[0]?.descricao}</p>

                <button 
                type="button"
                onClick={realizarProva}
                >
                    <img src={close} alt="" /> Aula</button>
            </header>
            <main>
                <header>
                    <h2>Titulo pergunta</h2>
                </header>
                <div className="lista_respostas">
                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>
                </div>

                <header>
                    <h2>Titulo pergunta</h2>
                </header>
                <div className="lista_respostas">
                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>
                </div>

                <header>
                    <h2>Titulo pergunta</h2>
                </header>
                <div className="lista_respostas">
                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>
                </div>

                <header>
                    <h2>Titulo pergunta</h2>
                </header>
                <div className="lista_respostas">
                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>
                </div>

                <header>
                    <h2>Titulo pergunta</h2>
                </header>
                <div className="lista_respostas">
                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>
                </div>

                <header>
                    <h2>Titulo pergunta</h2>
                </header>
                <div className="lista_respostas">
                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>

                    <div className="resposta">
                        <input type="checkbox"/>
                        <p>Resposta inteira da pergunta</p>
                    </div>
                </div>

                <button type="button" className="btn_salvar_prova">Salvar</button>
            </main>
        </ContainerProva>
    )
}