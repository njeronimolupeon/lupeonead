
///Todos os types da junção de uma prova.

export interface ProvaProps{
    provaId: number;
    cursoId: number;
    titulo: string;
    descricao: string;
    notaCorte: number;
}

export interface PerguntaProps{
    perguntaId: number;
    provaId: number;
    titulo: string;
}

export interface RespostaProps{
    respostaId: number;
    perguntaId: number;
    resposta: string;
    isCorreto: boolean;
}