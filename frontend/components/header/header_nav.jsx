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

    openMenu(e) {
        e.preventDefault();
        this.setState({ toggled: true })
    }
        
    //     , () => {
    //         document.addEventListener('click', this.closeMenu);
    //     });
    // }

    closeMenu(e) {
        debugger
        // if (e.currentTarget.children[1] !== this.dropdownMenu){
            this.setState({ toggled: false })
        // }
    }


    
    // refactor this, hacky
    // closeMenu(e) {
    //     debugger
    //     if (!this.dropdownMenu.contains(e.target)) {
    //         this.setState({ toggled: false }, () => {
    //             document.removeEventListener('click', this.closeMenu);
    //         });
    //     }
    // }


    
    render () {
        const { currentUser, logout, logged_in } = this.props;
        // debugger
        let signInButton;
        if (!logged_in) {
            signInButton = <button onClick={this.handleLogIn} className="nav_login">
                              <i className="fas fa-user nav_signin_icon"></i>
                              <i className="nav_login_text">Sign In</i>
                           </button>
        } else {
            signInButton = <button onClick={this.openMenu} className="drop_button">
                              <i className="fas fa-user nav_user_icon fa-2x"></i>
                           </button>
        }
        let menu;
        if (currentUser && this.state.toggled) {
            menu = <div className="nav_dropdown_div" ref={(element) => {
                this.dropdownMenu = element;
            }}>   
            <ul className="dropdown" >
                      <li>{currentUser.username}</li>
                      <li>{currentUser.email}</li>
                      <li><button onClick={logout}>Log Out</button></li>
                   </ul>
            </div>
        } else { menu = null}
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