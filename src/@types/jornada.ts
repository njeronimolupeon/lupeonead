import { CursoProps } from "./curso";

export interface JornadaProps{
    jornadaId: number;
    categoria: number;
    titulo: string;
    matriculas: number;
    descricao: string;
    cursos: CursoProps[];
}