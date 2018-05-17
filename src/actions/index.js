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
    axios.get('/auth/logout')
        return {
            type: types.SIGN_OUT
        }
}

export const sidebarOn = () => {
    return{
        type: types.SIDEBAR_ON
    }
}

export const sidebarOff = () => {
    return{
        type: types.SIDEBAR_OFF
    }
}
