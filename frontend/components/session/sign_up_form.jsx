import React from 'react';

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
                    <label>
                        Username
                        <br/>
                        <input onChange={this.handleInput('username')} type="text" value={this.state.username} />
                    </label>
                    <br/>
                    <label>
                        Email
                        <br/>
                        <input onChange={this.handleInput('email')} type="text" value={this.state.email} />
                    </label>
                    <br/>
                    <label>
                        Password
                        <br/>
                        <input onChange={this.handleInput('password')} type="password" value={this.state.password} />
                    </label>
                    <input type="submit" value="Next"/>
                </form>
            </div>
        )
    }
}

export default SignUpForm;