import { ContainerLogin } from "./Style.login";

/* Import de imagens */
import logoLupeon from '../../assets/img_lupeon/logo_lupeon.png';
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function Login(){

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const history = useNavigate();
    const auth = useContext(AuthContext);

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

    if(auth.user){
        history("/home"); 
    }

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
                        <strong>Seu usuário</strong>
                        
                        <input 
                            type="text" 
                            placeholder="Digite seu usuário"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                    <div className="container_inputs">
                        <strong>Sua senha</strong>
                        
                        <input 
                            type="password" 
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

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