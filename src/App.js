import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/Header';
import SignUpForm from './components/auth/SignUpForm';
import SignInForm from './components/auth/SignInForm';
import ProfileOverview from './components/auth/userProfile/ProfileOverview';
import ItemsPerCategoryPage from './pages/ItemsPerCategoryPage';
import ItemsPerStorePage from './pages/ItemsPerStorePage';
import ItemDetailPage from './pages/ItemDetailPage';
import Home from './pages/Home';
import './App.css';

const App = () => {
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
                <Route exact path="/items/:id" 
                    component={ItemDetailPage} 
                />
                <Route exact path="/signup" 
                    component={SignUpForm} 
                />
                <Route exact path="/signin" 
                    component={SignInForm} 
                />
                <Route exact path="/my-profile" 
                    component={ProfileOverview} 
                />
            </Switch>
        </Provider>
    );
}

export default App;

