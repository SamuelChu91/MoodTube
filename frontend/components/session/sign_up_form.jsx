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

    componentWillUnmount() {
        this.props.clear();
    }

    render() {
        // debugger
        const { errors } = this.props;
        const errorsList = errors.map((error, idx) => <li key={idx}>{error}</li>)
        return (
            <div className='sign_up_box'>
                <ul>{errorsList}</ul>
                <img src={window.MoogleURL} className="img_signup_moogle"/>
                <div className="create_msg_div">
                    <span className="create_msg">Create Your Moogle Account</span>
                </div>
                <div className="cont_msg_signup_div">
                    <span className="cont_msg_signup">to continue to MoodTube</span>
                </div>
                <div className="signup_input_body">
                <form onSubmit={this.handleSubmit} >
                    <label>
                        <input onChange={this.handleInput('username')} type="text" placeholder="Your Name" value={this.state.username} />
                    </label>
                    <br/>
                    <label>
                        <input onChange={this.handleInput('email')} type="text" placeholder="Your Email" value={this.state.email} />
                    </label>
                    <br/>
                    <label>
                        <input onChange={this.handleInput('password')} type="password" placeholder="Password" value={this.state.password} />
                    </label>
                    <div className="signup_submits">
                        <Link className="signin_instead" to='/login' >Sign in Instead</Link>
                        <br/>
                        <input className="signup_next" type="submit" value="Next"/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default SignUpForm;