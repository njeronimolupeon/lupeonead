import { ContainerLesson } from "./style.lesson";
import { CheckCircle } from 'phosphor-react';
import { useNavigate } from "react-router-dom";
import { Reproduzir } from "../SVGComponents/Reproduzir";

interface LessonProps{
    aulaId: number | undefined;
    titulo : string;
}

export function Lesson({ aulaId, titulo }: LessonProps){

    const navigate = useNavigate();

    function redirectForVideo(aulaId: number){
        navigate(`/Aula/${aulaId}`);
    }

    return(
        <ContainerLesson>
            <header onClick={() => aulaId != undefined ? redirectForVideo(aulaId) : {}}>
                <Reproduzir fill='' stroke=""/>
                <div className="content_header_lesson"> 
                    <h3>{titulo}</h3>
                </div>
            </header>
        </ContainerLesson>
    )
}