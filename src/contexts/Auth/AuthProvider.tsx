import { useEffect, useState } from "react"
import { User } from "../../@types/user";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: {children: JSX.Element}) =>{
    
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem('authToken');

            if(token){
                const data = await api.validateToken(token);
                
                if(data){
                    setUser(data);
                }
            }
        }

        validateToken();

    }, []);

    async function signin (email: string, password: string){
        const data = await api.signin(email, password);

        if(data.user && data.token){
            setUser(data.user);
            setUserLocalStorage(data.user);
            setToken(data.token);
            return true;
        }

        return false;
    }

    async function signout(){
        await api.sigout();
        setUser(null);
        setToken('');
    }

    function setToken(token: string){
        localStorage.setItem('authToken', token);
    }

    function setUserLocalStorage(userLocal: User){
        localStorage.setItem('usuario', JSON.stringify(userLocal));
    }

    return(
        <AuthContext.Provider value={{ user, signin, signout, setUserLocalStorage}}>
            {children}
        </AuthContext.Provider>
    )
}