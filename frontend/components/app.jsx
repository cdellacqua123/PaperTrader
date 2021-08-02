import React from 'react';
import signup_container from './session/signup_container';

import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';


import UsersForm from './users/users_form';

const App = () => (
    <div>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={signup_container}/>
        <Route exact path='/users/show' component={UsersForm} />
        </Switch>
    </div>
);

export default App;