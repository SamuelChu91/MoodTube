import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const comment = {
            body: this.state.body,
            video_id: this.props.videoId,
            author_id: this.props.currentUser,
        };
        if (this.props.logged_in) {
            this.props.createComment(comment);
            this.setState({body: "" });
        } else {
            this.props.history.push('/login');
        }
    };

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    };

    render() {
        return (
            <div className="comment_form_wrapper">
                <button className="drop_button">
                    <i className="fas fa-user nav_user_icon fa-2x"></i>
                </button>
                <form className="comment_form_form" onSubmit={this.handleSubmit}>
                    <label>
                        <input className="comment_form_input" onChange={this.handleInput('body')} type="text" placeholder='Add a public comment...' value={this.state.body}/>
                    </label>
                    <input className="comment_form_submit" type="submit" value="COMMENT"/>
                </form>
            </div>
        )
    };
};

export default CommentForm;