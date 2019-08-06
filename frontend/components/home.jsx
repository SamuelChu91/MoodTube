import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavContainer from './header/header_nav_container';
import VideoListContainer from './video/video_list_container';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggled: false };

    };


    render () {
        return (
            <>
            <div>
                <header>
                    <HeaderNavContainer />
                </header>
            </div>
            <div className='index'>
                <h2>Recommended</h2>
                <VideoListContainer />
            </div>
            </>
        );
    };
};

export default Home;