import React from 'react';
import signup_container from './session/signup_container';
import login_container from './session/login_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import users_container from './users/users_container';
import create_account_form_container from './accounts/create_account_form_container';
import trades_container from './trades/trades_container';



const App = () => (
    <div>
        <Switch>
        <AuthRoute exact path='/login' component={login_container} />
        <AuthRoute exact path='/signup' component={signup_container} />
        <ProtectedRoute exact path='/users/show' component={users_container} />
        <ProtectedRoute exact path='/users/account/create' component={create_account_form_container} />
        <ProtectedRoute exact path="/trades/show" component={trades_container} />
        <Route path='/' component={Home}/>
        </Switch>
    </div>
);

export default App;