/* Import de imagens */
import logoLupeon from '../../assets/img_lupeon/logo_mobile.png';
import Config from '../../assets/img_icones/Config.png';
import Sino from '../../assets/img_icones/Sino.png';
import Monitor from '../../assets/img_icones/monitor.png';
import Seta from '../../assets/img_icones/seta_esquerda.png';

import { ContainerSidebar, ContainerSidebarMenu } from "./Style.sidebar";
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export function Sidebar(){

    const[menuOpen, setMenuOpen] = useState(false);
    const Auth = useContext(AuthContext);
    const history = useNavigate();

    async function logOut(){
        history("/login");
        await Auth.signout();
    }
    
    if(Auth.user)
    {
        return(
            <ContainerSidebar>
                <div className='container_sidebar'>
                    <header>
                        <img src={logoLupeon}/>
                    </header>
                    <main>
                        <div onClick={() => setMenuOpen(true)}>
                            <img src={Monitor} alt="" />
                            <strong>Monitor</strong>
                        </div>
                        <div onClick={() => setMenuOpen(true)}>
                            <img src={Monitor} alt="" />
                            <strong>Monitor</strong>
                        </div>
                        <div onClick={() => setMenuOpen(true)}>
                            <img src={Monitor} alt="" />
                            <strong>Monitor</strong>
                        </div>
                        <div onClick={() => setMenuOpen(true)}>
                            <img src={Monitor} alt="" />
                            <strong>Monitor</strong>
                        </div>
                    </main>
                    <footer>
                        <div>
                            <img src={Config} alt="Configurações" />
                            <img src={Sino} alt="Notificações" />
                            
                            <button onClick={logOut} style={{cursor:'pointer'}}>Sair</button>
                            <div className='circulo_nome'>
                                <label>NJ</label>
                            </div>
                        </div>
                    </footer>
                </div>
                <ContainerSidebarMenu>
                    <div className='sidebar-menu' style={menuOpen == true? {} : {display: 'none'}}>
                        <div className='sidebar-menu-content'>
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                <img src={Seta} alt="Recolher" />
                            </button>

                            <div className='subtitulos_menu'>
                                <Link to={'/login'}
                                style={{textDecoration: 'none', width: '100%'}}>
                                    <p>
                                        Subtitulo
                                    </p>
                                </Link>
                                <Link to={'/lupeon'} 
                                style={{textDecoration: 'none', width: '100%'}}>
                                    <p>Subtitulo</p>
                                </Link>
                                <Link to={'/ead'} 
                                style={{textDecoration: 'none', width: '100%'}}>
                                    <p>Subtitulo</p>
                                </Link>
                                <Link to={'/aula1'}
                                style={{textDecoration: 'none', width: '100%'}}>
                                    <p>Subtitulo</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </ContainerSidebarMenu>
            </ContainerSidebar>
                
        )
    }
    else{
        return <></>
    }
    
}