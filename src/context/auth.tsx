import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState<IUser>({} as IUser);

    const handleLogin = async (loginData: ILoginData) => {
        try{
            const { data } = await api.get(`user?email=${loginData.email}&password=${loginData.password}`)
            console.log(data)
            if (data.length === 1 && loginData.password === data[0].password) {
                setUser(data[0])
                navigate('/feed')
            } else {
                alert('Email ou senha inválido.')
            }
        } catch {
            alert('Houve um erro')
        }
    }

    const handleSignOut = () => {
        setUser({} as IUser)
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}


