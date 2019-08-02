import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.signup(this.state)
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
            // debugger
        };
    };

    render() {

        return (
            <div className='sign_up_box'>
                <form onSubmit={this.handleSubmit}>
                    <label className="signup_username">
                        Username
                        <br/>
                        <input onChange={this.handleInput('username')} type="text" value={this.state.username} />
                    </label>
                    <br/>
                    <label className="signup_email">
                        Email
                        <br/>
                        <input onChange={this.handleInput('email')} type="text" value={this.state.email} />
                    </label>
                    <br/>
                    <label className="signup_password">
                        Password
                        <br/>
                        <input onChange={this.handleInput('password')} type="password" value={this.state.password} />
                    </label>
                    <input className="signup_next" type="submit" value="Next"/>
                    <br/>
                    <Link className="signin_instead" to='/login' >Signin Instead</Link>
                </form>
            </div>
        )
    }
}

export default SignUpForm;