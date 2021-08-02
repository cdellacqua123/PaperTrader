import React from 'react';
import signup_container from './session/signup_container';
import UsersForm from './users/users_form';
import { Route } from 'react-router';

const App = () => (
    <div>
        <Route path='/signup' component={signup_container}/>
        <Route path='/users/show' component={UsersForm} />
    </div>
);

export default App;