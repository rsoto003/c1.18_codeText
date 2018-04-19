export default store => next => action => {

    if( !action.payload || !action.payload.then){
        console.log('NO promises here');
        return next(action)
    }

    console.log("Found a promise")

    action.payload.then(res => {
        const newAction = {...action, payload: res}

        store.dispatch(newAction)
    });
    return action.payload

}