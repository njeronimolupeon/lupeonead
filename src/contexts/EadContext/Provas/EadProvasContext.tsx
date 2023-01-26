import { createContext } from 'react';
import {ProvaProps} from '../../../@types/prova';
import {PerguntaProps} from '../../../@types/prova';
import {RespostaProps} from '../../../@types/prova';


export type EadProvasProps = {
    provas: ProvaProps[]
    perguntas: PerguntaProps[]
    respostas: RespostaProps[]
    setProva: (prova: ProvaProps[]) => void;
    setPergunta: (pergunta: PerguntaProps[]) => void;
    setResposta: (resposta: RespostaProps[]) => void;
    setProvaAndPergunta: (prova: ProvaProps[], pergunta: PerguntaProps[]) => void;
}

export const EadProvasContext = createContext<EadProvasProps>(null!);