import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component{
    constructor(props) {
        super(props);

    }

    render () {
        const { currentUser, logout } = this.props;
        let signInButton;
        if (currentUser === null) {
            signInButton = <Link to='/login'>Sign In</Link>
        } else {
            signInButton = <button onClick={logout}>Log Out</button>
        }
        return (
            <div className="headnav">
                <Link to ='/'>
                    <FontAwesomeIcon icon={faYoutube} /> MoodTube
                </Link>
                {signInButton}
            </div>
        );
    }
}

export default HeaderNav;