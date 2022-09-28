/* Import de imagens */
import logoLupeon from '../../assets/img_lupeon/logo_mobile.png';
import Close from '../../assets/img_icones/close.png';
import Sino from '../../assets/img_icones/Sino.png';
import Monitor from '../../assets/img_icones/monitor.png';
import Seta from '../../assets/img_icones/seta_esquerda.png';


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

    if(Auth.user)
    {
        return(
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
                                <img src={Sino} alt="Notificações" />
                                
                                <div className='circulo_nome'
                                onClick={onRequestOpen}>
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
                            <img src={Sino} alt="Notificações" />
                            
                            <div className='circulo_nome'
                                onClick={onRequestOpen}>
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

                                    <Link to="/usuario" className='link_to_usuario'>
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
                                style={{textDecoration: 'none', width: '100%'}}>
                                    <p>
                                        Login
                                    </p>
                                </Link>
                                <Link to={'/home'} 
                                style={{textDecoration: 'none', width: '100%'}}>
                                    <p>Home</p>
                                </Link>
                                <Link to={'/usuario'} 
                                style={{textDecoration: 'none', width: '100%'}}>
                                    <p>Usuário</p>
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