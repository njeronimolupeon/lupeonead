import { ContainerLesson } from "./style.lesson";
import { CheckCircle } from 'phosphor-react';

export function Lesson(){
    return(
        <ContainerLesson>
            <header>
                <CheckCircle size={25}  />
                <div className="content_header_lesson"> 
                    <h3>LCS - Lupeon Customer Service</h3>
                    <div className="box_departamento">
                        <p>INTERNO</p>
                    </div>
                </div>
            </header>
            <main>

            </main>
        </ContainerLesson>
    )
}