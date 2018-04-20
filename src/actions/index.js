import types from './types';
import axios from 'axios';

export const signInCheck = () => {
    const response = axios.get('/auth/check')

    return{
        type: types.SIGN_IN_CHECK,
        payload: response
    }
    
}

export const signOut = () => { 
    axios.get('/auth/logout').then( res => {
        return {
            type: types.SIGN_OUT
        }
    })
}
