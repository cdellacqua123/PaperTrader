import React from 'react';
import signup_container from './session/signup_container';
import { Route } from 'react-router';

const App = () => (
    <div>
        <Route path='/signup' component={signup_container}/>
    </div>
);

export default App;