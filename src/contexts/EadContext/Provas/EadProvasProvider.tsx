import { useEffect, useState } from "react";
import { PerguntaProps, ProvaProps, RespostaProps } from "../../../@types/prova";
import { EadProvasContext } from "./EadProvasContext"


export const EadProvasProvider = ( { children } : { children: JSX.Element } ) => {

    const [provas, setProvas] = useState<ProvaProps[]>([]);
    const [perguntas, setPerguntas] = useState<PerguntaProps[]>([]);
    const [respostas, setRespostas] = useState<RespostaProps[]>([]);

    useEffect(() =>{

        const provas_ = localStorage.getItem('dbEad-Prova');
        const perguntas_ = localStorage.getItem('dbEad-Pergunta');
        const respostas_ = localStorage.getItem('dbEad-Resposta');

        if(provas_){
            let prova_ = JSON.parse(provas_);
            setProvas(prova_);
        }

        if(perguntas_){
            let pergunta_ = JSON.parse(perguntas_);
            setPerguntas(pergunta_);
        }

        if(respostas_){
            let resposta_ = JSON.parse(respostas_);
            setRespostas(resposta_);
        }

    }, []);

    function setProva(provap: ProvaProps[]){
        if(provap){
            let provaParams = {
                provaId: provap[0].provaId,
                cursoId: provap[0].cursoId,
                titulo: provap[0].titulo,
                descricao: provap[0].descricao,
                notaCorte: provap[0].notaCorte
            }

            const todasProvas = provas.filter(p => p.cursoId !== provap[0].cursoId);
            const prova_ = [...todasProvas];
            prova_.push(provaParams);
            localStorage.setItem('dbEad-Prova', JSON.stringify(prova_));
            setProvas(prova_);
        }
    }

    function setPergunta(perguntap: PerguntaProps[]){
        if(perguntap){
            let perguntaParams = {
                perguntaId: perguntap[0].perguntaId,
                provaId: perguntap[0].provaId,
                titulo: perguntap[0].titulo,
            }

            const todasPerguntas = perguntas.filter(p => p.perguntaId !== perguntap[0].perguntaId);
            const pergunta_ = [...todasPerguntas];
            pergunta_.push(perguntaParams);
            localStorage.setItem('dbEad-Perguntas', JSON.stringify(pergunta_));
            setPerguntas(pergunta_);
        }
    }

    function setResposta(respostap: RespostaProps[]){
        if(respostap){
            // let respostaParams = {
            //     respostaId: respostap[0].respostaId,
            //     perguntaId: respostap[0].perguntaId,
            //     resposta: respostap[0].resposta,
            //     isCorreto: respostap[0].isCorreto
            // }

            // const todasRespostas = respostas.filter(r => r.respostaId !== respostap[0].respostaId);
            // const resposta_ = [...todasRespostas];
            // resposta_.push(respostaParams);
            // localStorage.setItem('dbEad-Resposta', JSON.stringify(resposta_));
            // setRespostas(resposta_);

            var todasRespostas:RespostaProps[] = []
            
            respostas.map(p => {
                respostap.map(pp => {
                    if(pp.respostaId !== p.respostaId){
                        todasRespostas.push(p);
                    }
                })
            });

            const resposta_ = [...todasRespostas];

            respostap.map(p => {
                let respostaParams = {
                    respostaId: p.respostaId,
                    perguntaId: p.perguntaId,
                    resposta: p.resposta,
                    isCorreto: p.isCorreto
                }

                resposta_.push(respostaParams);
            });

            localStorage.setItem('dbEad-Resposta', JSON.stringify(resposta_));
            setRespostas(resposta_);
        }
    }

    function setProvaAndPergunta(provap: ProvaProps[], perguntap: PerguntaProps[]){
        var provaId = 0;

        if(provap){
            provaId = provap[0].provaId;

            let provaParams = {
                provaId: provap[0].provaId,
                cursoId: provap[0].cursoId,
                titulo: provap[0].titulo,
                descricao: provap[0].descricao,
                notaCorte: provap[0].notaCorte
            }

            const todasProvas = provas.filter(p => p.cursoId !== provap[0].cursoId);
            const prova_ = [...todasProvas];
            prova_.push(provaParams);
            localStorage.setItem('dbEad-Prova', JSON.stringify(prova_));
            setProvas(prova_);
        }

        if(perguntap){


            var todasPerguntas:PerguntaProps[] = []
            
            perguntas.map(p => {
                perguntap.map(pp => {
                    if(pp.perguntaId !== p.perguntaId){
                        todasPerguntas.push(p);
                    }
                })
            });

            const pergunta_ = [...todasPerguntas];

            perguntap.map(p => {
                let perguntaParams = {
                    provaId: provaId,
                    perguntaId: p.perguntaId,
                    titulo: p.titulo,
                }

                pergunta_.push(perguntaParams);
            });
            
            // console.log(pergunta_);

            localStorage.setItem('dbEad-Pergunta', JSON.stringify(pergunta_));
            setPerguntas(pergunta_);
            
        }
    }

    return(
        <EadProvasContext.Provider value={{provas, perguntas, respostas, setProva, setPergunta, setResposta, setProvaAndPergunta}}>
            { children }
        </EadProvasContext.Provider>
    )
}