import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: {id: 1, name:'Nicolas', email:'nicolas.jeronimo@lupeon.com.br'},
        }

        // const response = await api.post('/validateToken', {token});
        // return response.data;
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