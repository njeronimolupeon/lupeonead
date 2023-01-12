export interface CursoProps{
    cursoId: number;
    dataAtualizacao: Date;
    titulo: string;
    autor: string;
    cursoStatusId: number;
    cursoStatus: string;
    nota: number | null;
    cursoDificuldadeId: number;
    cursoDificuldade: string 
    cursoDuracao: string;
    favorito: boolean;
    descricaoPopup: string;
}