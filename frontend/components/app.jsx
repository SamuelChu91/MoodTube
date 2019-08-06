import React from 'react';
import Home from './home';
import { Route, Switch } from 'react-router-dom';
import LogInFormContainer from './session/log_in_container';
import SignUpFormContainer from './session/sign_up_container';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderNavContainer from './header/header_nav_container';

const App = () => (
    <>
        <div className='all'> 
            <Switch>
                <AuthRoute path='/signup' component={SignUpFormContainer} />
                <AuthRoute path='/login' component={LogInFormContainer} />
                <Route path='/' component={Home} />
            </Switch>
        </div>
    </>
);

export default App;