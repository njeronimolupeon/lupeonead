import { ContainerLogin } from "./Style.login";

/* Import de imagens */
import logoLupeon from '../../assets/img_lupeon/logo_lupeon.png';
import cadeado from '../../assets/img_icones/cadeado.png';
import emailfoto from '../../assets/img_icones/email.png';
import olhoaberto from '../../assets/img_icones/olhoaberto.png';
import olhofechado from '../../assets/img_icones/olhofechado.png';

import { FormEvent, useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function Login(){

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[eyesClosed, setEyesClosed] = useState(true);
    const history = useNavigate();
    const auth = useContext(AuthContext);
    const input = useRef<HTMLInputElement | null>(null);


    async function onSubmitForm(event: FormEvent){
        event.preventDefault();

        if(email == "" || senha == "")
        {
            return toast.error('Preencha os campos para efetuar o login');
        };

        const isLogged = await auth.signin(email, senha);

        if(isLogged){
            history("/home");
            toast.success('Logado com sucesso, seja bem vindo ao EAD Lupeon.'); 
        }else{
            toast.error('Erro ao efetuar o login, verifique seus dados e tente novamente.'); 
        }

    }

    function handleShowPass() {
        if (input.current?.type === 'password') {
            setEyesClosed(false);
            input.current.type = "text"

        } else {
            setEyesClosed(true);

            if(input.current?.type == "text"){
                input.current.type = "password";
            }
        }
    }

    if(auth.user){
        history("/home"); 
    }else{
        return(
            <ContainerLogin>
    
                <form onSubmit={onSubmitForm}>
                    <header>
                        <div>
                            <img src={logoLupeon} alt="Logo Lupeon TMS As a Service"/>
                            <p>O primeiro <b>TMS AS SERVICE</b></p>
                        </div>
                        <div className="tt_login">
                            <h2>Log In</h2>
                        </div>
                    </header>
    
                    <main>
                        <div className="container_inputs">
                            <div className="container_fotos_input">
                                <img src={emailfoto} alt="Email" />
                            </div>
                            
                            <div>
                                <strong>Seu usuário</strong>
                                
                                <input 
                                    type="text" 
                                    placeholder="Digite seu usuário"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="container_inputs">
                            <div className="container_fotos_input">
                                <img src={cadeado} alt="Cadeado" />
                            </div>
    
                            <div className="container_senha">
                                <strong>Sua senha</strong>
                                
                                <input 
                                    ref={input}
                                    type="password" 
                                    placeholder="Digite sua senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <div className="input-image-olho">
                                    <button type="button" onClick={handleShowPass}>
                                        { eyesClosed ? 
                                            <img src={olhofechado} alt="Olhos"  /> 
                                            : 
                                            <img src={olhoaberto} alt="Olhos"  /> 
                                        } 
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </main>
    
                    <footer>
                        <div className="container_footer">
                            <div className="container_mantlogado">
                                <input type="checkbox" id="checklistLogin"/>
                                <label htmlFor="checklistLogin">Manter Logado</label>
                            </div>
    
                            <div className="container_esquecisenha">
                                <span>Esqueci minha senha</span>
                            </div>
                        </div>
    
    
                        <button type="submit">Entrar</button>
                    </footer>
    
                </form>
            </ContainerLogin>
        )
    }

    
}