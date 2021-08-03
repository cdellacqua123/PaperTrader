import React from 'react';
import signup_container from './session/signup_container';
import login_container from './session/login_container';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';

import users_container from './users/users_container';


const App = () => (
    <div>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={signup_container}/>
        <Route exact path='/users/show' component={users_container} />
        <Route exact path='/login' component={login_container} />
        </Switch>
    </div>
);

export default App;