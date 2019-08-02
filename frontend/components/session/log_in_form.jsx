import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.demoLogIn = this.demoLogIn.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    };

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    };

    demoLogIn(e) {
        e.preventDefault();
        const user = { email: "demologin", password: "hunter12" };
        this.props.login(user);
    }

    render () {

        return (
            <div className='log_in_box'>
                <img src={window.MoogleURL} />
                <span className="second">Sign In</span>
                <span className="third">to continue to MoodTube</span>
                <form onSubmit={this.handleSubmit}>
                    <label className="login_email">
                        Email
                        <br/>
                        <input onChange={this.handleInput('email')} type="text" value={this.state.email}/>
                    </label>
                    <br/>
                    <label className="login_password">
                        Password
                        <br/>
                        <input onChange={this.handleInput('password')} type="password" value={this.state.password} />
                    </label>
                    <br/>
                    <input className="next_submit" type="submit" value="Next"/>
                    <br/>
                    <div >
                        <Link to='/signup' className='sign_up'>Create Account</Link>
                    </div>
                </form>
                <br/>
                <div className='demo'>
                <button onClick={this.demoLogIn}>Demo Log In</button>
                </div>
            </div>
        )
    }
}

export default LoginForm;