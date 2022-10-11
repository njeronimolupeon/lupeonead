import { Lesson } from "./Lesson";
import { ContainerSidebarReprodutor } from "./styled.sidebarreprodutor";


export function SidebarReprodutor(){
    return(
        <ContainerSidebarReprodutor>
          <header>
            <h1>Cronograma de aulas</h1>  
          </header> 
          <div className="container_lessons">
            <Lesson />
          </div> 
          
        </ContainerSidebarReprodutor>
    )
}