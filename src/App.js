import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/appContainer/AppContainer';

import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

export default App;






