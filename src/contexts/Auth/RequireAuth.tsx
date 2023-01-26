import { useContext } from "react"
import { toast } from "react-toastify";
import { Login } from "../../Components/Login/Login";
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({ children }: {children: JSX.Element}) =>{

    const auth = useContext(AuthContext);

    // console.log(auth.user);

    if(!auth.user){
        // toast.error('Você precisa estar logado para ter acesso a esta página.');
        return <Login />
    }

    return children
}