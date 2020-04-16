import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { loadUserProfile } from '../../actions/auth';
import Header from '../header/Header';
import SignUpForm from '../auth/SignUpForm';
import SignInForm from '../auth/SignInForm';
import ItemsPerCategoryPage from '../../pages/ItemsPerCategoryPage';
import ItemsPerStorePage from '../../pages/ItemsPerStorePage';
import ItemDetailPage from '../../pages/ItemDetailPage';
import ProfilePage from '../../pages/ProfilePage';
import SavedItemsPage from '../../pages/SavedItemsPage';
import ProfileSettingsPage from '../../pages/ProfileSettingsPage';
import Home from '../../pages/Home';
import PrivateRoute from '../common/PrivateRoute';

class AppContainer extends Component {

    componentDidMount(){
        this.props.loadUserProfile();
    }

    render() {
        //console.log(this.props)
        const { isAuthenticated, profile } = this.props
        return (
            <div>
                <Header 
                    isAuth={isAuthenticated}
                    profile={profile}
                />
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
                    <PrivateRoute exact path="/profile" 
                        component={ProfilePage} 
                    />
                    <PrivateRoute exact path="/saved-items" 
                        component={SavedItemsPage} 
                    />
                    <PrivateRoute exact path="/settings" 
                        component={ProfileSettingsPage} 
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    profile: state.auth.profile,
    error: state.errors
});

export default withRouter(connect(mapStateToProps, { loadUserProfile })(AppContainer))