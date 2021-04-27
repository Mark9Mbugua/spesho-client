import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components/app-container/app-container.component';

import './App.css';
import { loadCurrentUser } from './actions/auth';

class App extends Component {
    componentDidMount(){
        store.dispatch(loadCurrentUser());
    }
    
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default App;






