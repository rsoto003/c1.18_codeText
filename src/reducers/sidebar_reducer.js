import types from '../actions/types';

const DEFAULT_STATE = {
    toggle: false
}

export default (state= DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIDEBAR_ON:
            console.log('sidebar on!');
            return {...state, toggle: true};
        default:
            return state;
    }

}