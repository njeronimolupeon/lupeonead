import { Header } from "../Header/Header";
import { ContainerHome } from "./Style.home";
import lupa from  '../../assets/img_icones/search.png';

export function Home(){
    return (
        <ContainerHome>
            <header>
                <Header title = {"Home"} />
            </header>
            <main>
                <input type="text" placeholder="Sua pesquisa aqui"/>
                <button type="button"><img src={lupa} alt="Pesquisar" /></button>
            </main>
        </ContainerHome>
    )

}