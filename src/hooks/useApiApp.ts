
import axios from 'axios';

export const apiApp = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API
});