import { ContainerEditUser } from "./Style.edituser";

/* Import de images */
import mockupPerfil from '../../assets/img_icones/mockup_avatar.jpg';

import { useEffect, useRef, useState } from "react";

    

export function EditUser(){
    const fileInput = useRef<HTMLInputElement | null>(null);

    const [image, setImage] = useState<File>();
    const [preview, setPreview] = useState<string>('');

    useEffect(() =>{
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        }
    },[image]);

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
                
                <div className="container_dados_user">
                    <p>Edite seu Apelido:</p>
                    <input type="text" placeholder="Digite o nome que gostaria de ser chamado no Lupeon EAD."/>
                </div>
            </div>
        </ContainerEditUser>
    )
}