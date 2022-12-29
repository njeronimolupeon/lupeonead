import { Header } from "../Header/Header";
import { ContainerHome } from "./Style.home";
import lupa from  '../../assets/img_icones/search.png';
import { Grafics } from "./Grafics";

export function Home(){
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', paddingTop: '1rem', paddingRight:'1rem'}}>
            <ContainerHome>
                <header>
                    <Header title = {"Home"} />
                </header>
                <main>
                    <input type="text" placeholder="Pesquisar..."/>
                    <button type="button"><img src={lupa} alt="Pesquisar" /></button>
                </main>
            </ContainerHome>
            
            <Grafics />
            
        </div>
    )

}