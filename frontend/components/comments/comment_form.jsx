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
        debugger
        e.preventDefault();
        const comment = {
            body: this.state.body,
            video_id: this.props.videoId,
            author_id: this.props.currentUser,
        };
        this.props.createComment(comment);
        this.setState({body: "" });
    };

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    };

    render() {
        // debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input onChange={this.handleInput('body')} type="text" placeholder='Add a public comment...' value={this.state.body}/>
                    </label>
                    <input type="submit" value="COMMENT"/>
                </form>
            </div>
        )
    };

}

export default CommentForm;