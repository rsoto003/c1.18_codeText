import types from './types';
import axios from 'axios';

export const signInCheck = () => {
    axios.get('http://localhost:5000/auth/check').then(res=>{
        return{
            type: types.SIGN_IN_CHECK,
            payload: res.data.authenticated
        }
    })
}

export const signOut = () => {
    axios.get('http://localhost:5000/auth/logout').then( res => {
        return {
            type: types.SIGN_OUT,
        }
    })
}
