import { createContext } from "react";
import { CursoProps } from "../../../@types/curso";
import { JornadaProps } from "../../../@types/jornada";

export type EadContextType = {
    jornadas: JornadaProps[];
    cursos: CursoProps[];
    setJornadaFunction: (jornada: JornadaProps[]) => void;
    setCursoFunction:   (curso: CursoProps[]) => void;
}

export const EadContext = createContext<EadContextType>(null!);