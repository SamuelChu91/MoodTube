import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class HeaderNav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            title: "",
            //videos:{}
        };
        
        this.dropDownRef = React.createRef();
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleLogIn() {
        this.props.history.push('/login');
    };

    handleSearch() {
        this.props.history.push(`/videos/search/${this.state.title}`);
        // this.props.search(`${this.state.title}`);
    };

    handleInput(field) {
        return (e) => {
            
            this.setState({[field]: e.target.value});
        };
    };

    openMenu(e) {
        e.preventDefault();
        this.setState({ toggled: true })
    };

    closeMenu(e) {
        e.preventDefault();
        // if (e.currentTarget.children[1] !== this.dropdownMenu){
            this.setState({ toggled: false })
        // }
    };

    setBlurListener(ref, callback) {
        return event => {
            const { relatedTarget } = event;
            const node = ref.current;
            if (node !== relatedTarget && !node.contains(relatedTarget)) {
                callback();
            }
        };
    };
    
    // refactor this, hacky
    // closeMenu(e) {
    //     if (!this.dropdownMenu.contains(e.target)) {
    //         this.setState({ toggled: false }, () => {
    //             document.removeEventListener('click', this.closeMenu);
    //         });
    //     }
    // }


    
    render () {
        const { currentUser, logout, logged_in } = this.props;
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
            menu = <div className="nav_dropdown_div" ref={this.dropDownRef}>   
            <ul className="dropdown" >
                <div className="nav_dropdown_top">
                    <div>
                        <i className="fas fa-user fa-2x nav_dropdown_top_user"></i>
                    </div>
                    <div>
                        <li className="nav_dropdown_username">{currentUser.username}</li>
                        <li className="nav_dropdown_email">{currentUser.email}</li>
                    </div>
                </div>
                    <div className="nav_dropdown_bot_stuff">
                        <i className="far fa-arrow-alt-circle-right fa-2x nav_dd_bot_icon" onClick={logout}></i>
                      <li><button onClick={logout} className="nav_dropdown_signout">
                          <p>Sign out</p>
                          </button></li>
                    </div>
                   </ul>
            </div>
        } else { menu = null};
        return (
            <div className="headnav">
                <div className="nav_topleft">
                    {/* <i className="fas fa-user-graduate nav_topleft_icon"></i> */}
                    <a href="https://samuelchu91.github.io/" className="fas fa-user-graduate nav_topleft_icon" target="_blank"></a>
                    <Link to ='/' className="nav_logo">
                        <i className="fab fa-youtube the_logo fa-2x"></i>
                        <h1 className="nav_moodtube">
                            MoodTube
                        </h1>
                    </Link>
                </div>
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleInput('title')} type="text" placeholder="Search" className="search_bar"/>
                    <button onClick={this.handleSearch} className="search_icon">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <div className="nav_icons">
                    <Link to='/upload' className="nav_upload">
                        <i className="fas fa-file-video"></i>
                    </Link>
                    {/* <div>
                        <i className="fas fa-th nav_upload"></i>
                    </div> */}
                    {/* <div>
                        <i className="fas fa-share-square nav_upload"></i>
                    </div>
                    <div>
                        <i className="fas fa-bell nav_upload"></i>
                    </div> */}
                    <div className="nav_right_parent" onBlur={this.setBlurListener(this.dropDownRef, this.closeMenu)}>
                        {signInButton}
                            {menu}
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(HeaderNav);