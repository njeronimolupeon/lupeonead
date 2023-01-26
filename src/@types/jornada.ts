import { CursoProps } from "./curso";

export interface JornadaProps{
    jornadaId: number;
    categoria: number;
    titulo: string;
    matriculas: null | number;
    descricao: string;
    cursos: null | CursoProps[];
}