import axios from 'axios';
import { useState } from 'react';
import { User } from '../@types/user';

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API
});



export const useApi = () => ({

    validateToken: (token: string) => {
        // const usuario = localStorage.getItem('usuario');
        // if(usuario) JSON.parse(usuario);
        // usuario.
        
        // const response = await api.post('/validateToken', {token});
        // return response.data;
        return {
            id: 1, name:'Nicolas', email:'nicolas.jeronimo@lupeon.com.br'
        }
    },
    
    signin: async (email:string, password:string) => {
        return {
            user: {id: 1, name:'Nicolas', email:'nicolas.jeronimo@lupeon.com.br'},
            token: '123456789'
        }
        // const response = await api.post('/signin', { email, password });
        // return response.data;
    },

    sigout: async() => {
        return {status: true};
        // const response = await api.post('/logout');
        // return response.data;
    },
});