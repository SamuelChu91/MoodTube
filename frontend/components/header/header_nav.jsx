import React from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn() {
        this.props.history.push('/login');
    }

    openMenu() {
        this.setState({ toggled: true })
    }

    // refactor this, hacky
    closeMenu(e) {
        // debugger
        if (this.state.toggled) {
            setTimeout(() => {
                this.setState({ toggled: false })
            }, 250);
        }
    }


    
    render () {
        const { currentUser, logout, logged_in } = this.props;
        // debugger
        let signInButton;
        if (!logged_in) {
            signInButton = <button onClick={this.handleLogIn} className="nav_login">
                              <i class="fas fa-user nav_signin_icon"></i>
                              <i className="nav_login_text">Sign In</i>
                           </button>
        } else {
            signInButton = <button onClick={this.openMenu} className="drop_button">
                              <i class="fas fa-user nav_user_icon fa-2x"></i>
                           </button>
        }
        let menu;
        if (this.state.toggled) {
            menu = <ul className="dropdown">
                      <li>{currentUser.username}</li>
                      <li>{currentUser.email}</li>
                      <li><button onClick={logout}>Log Out</button></li>
                   </ul>
        }
        // debugger
        return (
            <div className="headnav">
                <Link to ='/' className="nav_logo">
                    <i className="fab fa-youtube the_logo fa-2x"></i>
                    <h1 className="nav_moodtube">
                        MoodTube
                    </h1>
                </Link>
                <form>
                    <input type="text" placeholder="Search" className="search_bar"/>
                    <button className="search_icon">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <div className="nav_right_parent" onBlur={this.closeMenu}>
                    {signInButton}
                    {menu}
                </div>
            </div>
        );
    }
}

export default HeaderNav;