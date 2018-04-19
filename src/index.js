import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './components/app';
import {createStore} from 'redux';
import types from './actions/types';
import rootReducer from './reducers';
import {Provider} from 'react-redux'

const store = createStore( rootReducer, {});



ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
