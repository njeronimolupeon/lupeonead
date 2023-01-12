import { ContainerLesson } from "./style.lesson";
import { CheckCircle } from 'phosphor-react';
import { useNavigate } from "react-router-dom";

interface LessonProps{
    aulaId: string;
}

export function Lesson({ aulaId }: LessonProps){

    const navigate = useNavigate();

    function redirectForVideo(aulaId: string){
        navigate(`/Aula/${aulaId}`);
    }

    return(
        <ContainerLesson>
            <header onClick={() => redirectForVideo(aulaId)}>
                <CheckCircle size={25}  />
                <div className="content_header_lesson"> 
                    <h3>LCS - Lupeon Customer Service</h3>
                    <div className="box_departamento">
                        <p>INTERNO</p>
                    </div>
                </div>
            </header>
        </ContainerLesson>
    )
}