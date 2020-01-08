import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/Header';
import SingleCategory from './pages/SingleCategory';
import SingleStore from './pages/SingleStore';
import Home from './pages/Home';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Switch>
                    <Route path="/items/category/:id" component=
                    {SingleCategory} />
                    <Route path="/items/store/:id" component=
                    {SingleStore} />
                    <Route path="/" component={Home} />
                </Switch>
            </Provider>
        );
    }
}

export default App;
