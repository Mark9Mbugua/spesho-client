import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { loadCurrentUser } from '../../actions/auth';
import Header from '../navigation/header/header.component';
import SignUpForm from '../auth/sign-up-form/sign-up-form';
import SignInForm from '../auth/sign-in-form/sign-in-form.component';
import ItemsPerCategoryPage from '../../pages/items-per-category-page.component';
import ItemsPerStorePage from '../../pages/items-per-store-page.component';
import ItemDetailPage from '../../pages/item-detail-page.component';
import ProfilePage from '../../pages/profile-page.component';
import SavedItemsPage from '../../pages/saved-items-page.component';
import ProfileSettingsPage from '../../pages/profile-settings-page.component';
import MobileCategoriesPage from '../../pages/mobile-categories-page.component';
import MobileStoresPage from '../../pages/mobile-stores-page.component';
import AboutUsPage from '../../pages/about-us-page.component';
import Home from '../../pages/home.component';
import PrivateRoute from '../common/PrivateRoute';

class AppContainer extends Component {

    componentDidMount(){
        this.props.loadCurrentUser();
    }

    render() {
        const { isAuthenticated, user } = this.props;
        return (
            <div>
                <Header 
                    isAuth={isAuthenticated}
                    user={user}
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/items/category/:id" 
                        component={ItemsPerCategoryPage} 
                    />
                    <Route exact path="/items/store/:id" 
                        component={ItemsPerStorePage} 
                    />
                    <Route exact path="/categories" 
                        component={MobileCategoriesPage} 
                    />
                    <Route exact path="/stores" 
                        component={MobileStoresPage} 
                    />
                    <Route exact path="/items/:id" 
                        render={(props) => <ItemDetailPage {...props} user={user} />} 
                    />
                    <Route exact path="/signup" 
                        component={SignUpForm} 
                    />
                    <Route exact path="/signin" 
                        component={SignInForm} 
                    />
                    <Route exact path="/about-us" 
                        component={AboutUsPage} 
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
    user: state.auth.user,
    error: state.errors
});

export default withRouter(connect(mapStateToProps, { loadCurrentUser })(AppContainer))