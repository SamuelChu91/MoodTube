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

    render () {

        return (
            <div className='log_in_box'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <br/>
                        <input onChange={this.handleInput('email')} type="text" value={this.state.email}/>
                    </label>
                    <br/>
                    <label>
                        Password
                        <br/>
                        <input onChange={this.handleInput('password')} type="password" value={this.state.password} />
                    </label>
                    <br/>
                    <input type="submit" value="Next"/>
                    <br/>
                    <div className='sign_up'>
                <Link to='/signup' >Create Account</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;