import React from 'react';
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
            <div>
                <Link to ='/'>LOGO</Link>
                <br/>
                {signInButton}
            </div>
        );
    }
}

export default HeaderNav;