import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoShowContainer from './video/video_show_container';
import Home from './home';
import VideoSearch from './video/video_search';
import HeaderNavContainer from './header/header_nav_container';

const Main = () => (
    <div>
    <HeaderNavContainer />
        <Switch>
            <Route exact path='/videos/:id' component={VideoShowContainer} />
            <Route exact path='/videos/search/:title' component={VideoSearch} />
            <Route exact path='/' component={Home} />
        </Switch>
    </div>
);

export default Main;