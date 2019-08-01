import React from 'react';
import VideoIndex from './video_index';
import { Route, Switch } from 'react-router-dom';
import LogInFormContainer from './session/log_in_container';
import SignUpFormContainer from './session/sign_up_container';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <>
        <div> 
        <header>
            <h1>MoodTube</h1>
            <h2>NavBar PlaceHolder</h2>
            <div className='sign_in'>  
            <Link to='/login' >Sign In</Link>
            </div>
        </header>
            <Switch>
                <AuthRoute path='/signup' component={SignUpFormContainer} />
                <AuthRoute path='/login' component={LogInFormContainer} />
                <Route exact path='/' component={VideoIndex} />
            </Switch>
        </div>
    </>
);

export default App;