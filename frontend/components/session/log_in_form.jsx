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

    componentWillUnmount() {
        this.props.clear();
    }

    render () {
        const { errors } = this.props;
        const errorsList = errors.map((error, idx) => <li key={idx}>{error}</li>)
        return (
            <div className='log_in_box'>
                <ul>{errorsList}</ul>
                <img src={window.MoogleURL} />
                <div className="second">
                    <span className="sign_in">Sign In</span>
                </div>
                <div className="third">
                    <span className="cont_mood">to continue to MoodTube</span>
                </div>
                <div className="input_body">
                <form onSubmit={this.handleSubmit}>
                    <label className="login_email">
                        <input onChange={this.handleInput('email')} type="text" placeholder="Your Email" value={this.state.email}/>
                    </label>
                    <br/>
                    <label className="login_password">
                        <input onChange={this.handleInput('password')} type="password" placeholder="Password" value={this.state.password} />
                    </label>
                    <br/>
                    <div className="login_submits">
                        <Link to='/signup' className='sign_up'>Create Account</Link>
                    <br/>
                        <input className="next_submit" type="submit" value="Next"/>
                    </div>
                </form>
                </div>
                <br/>
                <button onClick={this.demoLogIn} className="demo">Demo</button>
            </div>
        )
    }
}

export default LoginForm;