/* Import de imagens */
import logoLupeon from '../../assets/img_lupeon/logo_mobile.png';
import Close from '../../assets/img_icones/close.png';
import Sino from '../../assets/img_icones/Sino.png';
import Monitor from '../../assets/img_icones/monitor.png';
import Home from '../../assets/img_icones/home.png';
import Curso from '../../assets/img_icones/curso.png';
import Seta from '../../assets/img_icones/seta_esquerda.png';
import Diploma from '../../assets/img_icones/diploma.png';

import { ContainerSidebar, ContainerSidebarMenu } from "./Style.sidebar";
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { AuthContext } from '../../contexts/Auth/AuthContext';

Modal.setAppElement('#root');

export function Sidebar(){

    const[menuOpen, setMenuOpen] = useState(false);
    const[menuOpenMobile, setMenuOpenMobile] = useState(false);
    const[openModalUser, setOpenModalUser] = useState(false);
    const Auth = useContext(AuthContext);
    const history = useNavigate();

    async function logOut(){
        history("/login");
        await Auth.signout();
    }

    function onRequestClose(){
        setOpenModalUser(false);
    }

    function onRequestOpen(){
        setOpenModalUser(true);
    }

    function onHandleMenuMobile(){
        setMenuOpenMobile(!menuOpenMobile);
        setMenuOpen(false);
        setOpenModalUser(false);
    }

    function handleOpenModalUser(){
        onRequestOpen();
        setMenuOpen(false);
    }

    function handleOpenMenuSidebar(numero:number){
        if(numero == 0){
            onRequestClose();
            setMenuOpen(true);
        }else if (numero == 1){
            onRequestClose();
            setMenuOpen(false);
        }
        
    }

    if(Auth.user)
    {
        return(
            <div style={{position:'relative', width:'6.1rem'}}>
            <ContainerSidebar>
                    <button className='btn_abrirfechar_menumob'>
                        <input id="menu-hamburguer" type="checkbox" onClick={onHandleMenuMobile}/>

                        <label htmlFor="menu-hamburguer">
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>
                    </button>
                <div className="menu_hamburguer_mobile">
                    

                    <div className='container_sidebar_mobile' style={menuOpenMobile == true? {} : {display: 'none'}}>
                        <header>
                            <img src={logoLupeon}/>
                        </header>
                        <main>
                        <Link to={'/home'} style={{textDecoration:'none'}}>
                            <div onClick={() => handleOpenMenuSidebar(1)}>
                                <img src={Home} alt="" />
                                <strong>Home</strong>
                            </div>
                        </Link>
                        <Link to={'/Jornadas'} style={{textDecoration:'none'}}>
                            <div onClick={() => handleOpenMenuSidebar(1)}>
                                <img src={Curso} alt="" />
                                <strong>Jornadas</strong>
                            </div>
                        </Link>
                            <div onClick={() => handleOpenMenuSidebar(0)}>
                                <img src={Diploma} alt="" />
                                <strong>Certificados</strong>
                            </div>
                        </main>
                        <footer>
                            <div>
                                <img src={Sino} alt="Notificações" />
                                
                                <div className='circulo_nome'
                                onClick={handleOpenModalUser}>
                                    <label>NJ</label>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

                <div className='container_sidebar'>
                    <header>
                        <img src={logoLupeon}/>
                    </header>
                    <main>
                        <Link to={'/home'} style={{textDecoration:'none'}}>
                            <div onClick={() => handleOpenMenuSidebar(1)}>
                                <img src={Home} alt="" />
                                <strong>Home</strong>
                            </div>
                        </Link>
                        <Link to={'/Jornadas'} style={{textDecoration:'none'}}>
                            <div onClick={() => handleOpenMenuSidebar(1)}>
                                <img src={Curso} alt="" />
                                <strong>Jornadas</strong>
                            </div>
                        </Link>
                            <div onClick={() => handleOpenMenuSidebar(0)}>
                                <img src={Diploma} alt="" />
                                <strong>Certificados</strong>
                            </div>
                    </main>
                    <footer>
                        <div>
                            <img src={Sino} alt="Notificações" />
                            
                            <div className='circulo_nome'
                                onClick={handleOpenModalUser}>
                                    <label>NJ</label>
                            </div>
                                <Modal
                                isOpen={openModalUser}
                                onRequestClose={onRequestClose}
                                overlayClassName="react-modal-overlay"
                                className="react-modal-content">
                                    <button 
                                    type='button'
                                    onClick={onRequestClose}
                                    className="react-modal-close">
                                        <img src={Close} alt="Fechar" />
                                    </button>

                                    <Link to="/usuario" className='link_to_usuario' onClick={onRequestClose}>
                                       <p>Editar perfil</p> 
                                    </Link>

                                    <button onClick={logOut} className="btn_logout">Sair</button>
                                </Modal>
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
                                style={{textDecoration: 'none', width: '100%'}}
                                onClick={() => setMenuOpen(false)}>
                                    <p>
                                        Login
                                    </p>
                                </Link>
                                <Link to={'/home'} 
                                style={{textDecoration: 'none', width: '100%'}}
                                onClick={() => setMenuOpen(false)}>
                                    <p>Home</p>
                                </Link>
                                <Link to={'/usuario'} 
                                style={{textDecoration: 'none', width: '100%'}}
                                onClick={() => setMenuOpen(false)}>
                                    <p>Usuário</p>
                                </Link>
                                <Link to={'/HomeCursos'}
                                style={{textDecoration: 'none', width: '100%'}}
                                onClick={() => setMenuOpen(false)}>
                                    <p>Cursos</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </ContainerSidebarMenu>
            </ContainerSidebar>
            </div>
        )
    }
    else{
        return <></>
    }
    
}