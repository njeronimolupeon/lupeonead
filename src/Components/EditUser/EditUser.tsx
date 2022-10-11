import { ContainerEditUser } from "./Style.edituser";
import { toast } from "react-toastify";

/* Import de images */
import mockupPerfil from '../../assets/img_icones/mockup_avatar.jpg';

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { User } from "../../@types/user";
    

export function EditUser(){
    const fileInput = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<File>();
    const [preview, setPreview] = useState<string | undefined>('');

    /* States User */

    const [apelido, setApelido] = useState<string | undefined>('');
    const [sigla, setSigla] = useState<string | undefined>('');
    const auth = useContext(AuthContext);

    useEffect(() =>{
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        }
    },[image]);

    useEffect(() =>{
        
        if(auth.user){
            setPreview(auth.user.imagem);
            setApelido(auth.user.apelido);
            setSigla(auth.user.sigla);
        }

    }, []);

    function onSaveUser(){

        if(image != null && apelido != '' && sigla != ''){
            if(auth.user){
                auth.setUserLocalStorage({
                    id: auth.user.id,
                    name: auth.user.name,
                    email: auth.user.email,
                    password: '',
                    apelido: apelido,
                    sigla: sigla,
                    imagem: preview
                });
            }

            toast.success('Dados salvos com sucesso!');

        }else{
            
            toast.error('Preencha os dados antes de salvar');

        }
    }

    return(
        <ContainerEditUser>
            <h2>Edite seu perfil</h2>
            <div className="container_header_editUser">
                <div className="container_img_perfil">
                    <div className="img_perfil">
                        {preview ? 
                        
                        <img src={preview} alt="Imagem perfil" />    

                        :

                        <img src={mockupPerfil} alt="Imagem perfil" />    
                        
                        }
                    </div>
                    <input 
                    type="file" 
                    ref={fileInput} 
                    accept="image/*"
                    onChange={(e) => {
                        if(e.target.files != null){
                            const file = e.target.files[0];
                
                            if (file && file.type.substring(0, 5) === "image") {
                                setImage(file);
                            } else {
                                // setImage();
                            }
                        }
                    }}/>

                    <button onClick={(e) => {
                        e.preventDefault();
                        fileInput.current?.click();
                    }} > Editar imagem</button>
                </div>
                
                <div className="container_content_edituser">
                    <div className="container_apelidos_edituser">
                        <div className="container_dados_user">
                            <p>Edite seu Apelido:</p>
                            <input 
                                type="text" 
                                placeholder="Digite um apelido."
                                value={apelido}
                                onChange={(e) => setApelido(e.target.value)
                            }/>
                        </div>
                        <div className="container_dados_user">
                            <p>Edite sua Sigla:</p>
                            <input 
                                type="text" 
                                placeholder="Digite suas iniciais."
                                value={sigla}
                                onChange={(e) => setSigla(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <button type="button">Alterar senha</button>

                </div>
                
                
            </div>

            <div className="btn_submit_user">
                <button type="button" onClick={onSaveUser}>Salvar informações</button>
            </div>
            
        </ContainerEditUser>
    )
}