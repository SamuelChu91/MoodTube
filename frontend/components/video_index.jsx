import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavContainer from './header/header_nav_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
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
                <p>Cool Vids soonTM</p>
            </div>
            </>
        );
    };
};

export default VideoIndex;