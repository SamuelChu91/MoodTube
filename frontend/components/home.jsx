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
            <div>
                <div className="home_body">
                    <div className="home_body_icons">
                        <a href="https://github.com/SamuelChu91">
                            <i className="fab fa-github nav_upload"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/samuel-chu-8a6259119/">
                            <i className="fab fa-linkedin-in nav_upload"></i>
                        </a>
                        <a href="https://twitter.com/Chuuperlol">
                            <i className="fab fa-twitter nav_upload"></i>
                        </a>
                        <a href="https://www.facebook.com/Chuuperlol">
                            <i className="fab fa-facebook-f nav_upload"></i>
                        </a>
                    </div>
                    <div className='index'>
                        <VideoListContainer />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;