export interface CursoProps{
    cursoId: number;
    jornadaId: number,
    dataAtualizacao: Date;
    titulo: string;
    autor: string;
    cursoStatusId: number;
    cursoStatus: string;
    nota: number | null;
    cursoDificuldadeId: number;
    cursoDificuldade: string 
    cursoDuracao: number;
    favorito: boolean;
    descricaoPopup: string;
}