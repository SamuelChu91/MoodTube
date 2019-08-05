import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavContainer from './header/header_nav_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggled: false };

        this.closeMenu = this.closeMenu.bind(this);
    };

    closeMenu() {
        if (this.state.toggled) {
            this.setState({ toggled: false })
        }
    }

    render () {
        return (
            <>
            <div>
                <header>
                    <HeaderNavContainer />
                </header>
            </div>
            <div className='index' onClick={this.closeMenu}>
                <p>Cool Vids soonTM</p>
            </div>
            </>
        );
    };
};

export default VideoIndex;