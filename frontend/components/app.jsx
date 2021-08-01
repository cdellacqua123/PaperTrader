import React from 'react';
import signup_container from './session/signup_container';

export default () => (
    <div>
        <AuthRoute path='/signup' component={signup_container}/>
    </div>
);