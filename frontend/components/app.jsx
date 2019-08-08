import React from 'react';
import Home from './home';
import { Route, Switch } from 'react-router-dom';
import LogInFormContainer from './session/log_in_container';
import SignUpFormContainer from './session/sign_up_container';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import VideoShowContainer from './video/video_show_container';
import VideoUploadContainer from './video/video_upload_container';
import HeaderNavContainer from './header/header_nav_container';
import Main from './main';

const App = () => {
    // debugger
    return (
    <>
        <div className='all'> 
        {/* <HeaderNavContainer/> */}
            <Switch>
                {/* <Main/> */}
                <AuthRoute exact path='/signup' component={SignUpFormContainer} />
                <AuthRoute exact path='/login' component={LogInFormContainer} />
                <Route exact path='/upload' component={VideoUploadContainer} />
                {/* <Route path='/videos/:id' component={VideoShowContainer} /> */}
                <Route path='/' component={Main} />
            </Switch>
        </div>
    </>
    );
}

export default App;