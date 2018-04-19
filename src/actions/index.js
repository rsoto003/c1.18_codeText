import types from './types';
import axios from 'axios';

export const signInCheck = () => {
    const response = axios.get('http://localhost:5000/auth/check')

    return{
        type: types.SIGN_IN_CHECK,
        payload: response
    }
    
}

export const signOut = () => { 
    axios.get('http://localhost:5000/auth/logout').then( res => {
        return {
            type: types.SIGN_OUT
        }
    })
}
