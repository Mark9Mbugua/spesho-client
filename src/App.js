import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/Header';
import ItemsPerCategoryPage from './pages/ItemsPerCategoryPage';
import ItemsPerStorePage from './pages/ItemsPerStorePage';
import Home from './pages/Home';
import './App.css';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/items/category/:id" 
                        component={ItemsPerCategoryPage} 
                    />
                    <Route exact path="/items/store/:id" 
                        component={ItemsPerStorePage} 
                    />
                </Switch>
            </Provider>
        );
    }
}

export default App;
