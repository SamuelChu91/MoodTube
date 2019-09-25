import React from 'react';
import CommentForm from '../comments/comment_container';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comment_actions';

class VideoShowItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subscribed: false,
        };

        this.handleSubErr = this.handleSubErr.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.handleSubbed = this.handleSubbed.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    };

    handleSubErr(e) {
        e.preventDefault();
        this.props.history.push('/login');
    }

    handleSub(e) {
        e.preventDefault();
        this.setState({ subscribed: true })
    };

    handleSubbed(e) {
        e.preventDefault();
        this.setState({ subscribed: false })
    };

    handleDelete(comment) {
        this.props.deleteComment(comment);
    };

    componentDidUpdate(prevProps) {
        
    };

    render() {
        const videoId = this.props.videoId;
        const commentsList = this.props.comments.map((comment) => {
            if (comment.video_id === parseInt(videoId)) {
                return (
                    <div className="comment_form_wrapper">
                        <button className="drop_button_comment">
                            <i className="fas fa-user nav_user_icon fa-2x"></i>
                        </button>
                        <li className="comment_form_form" key={comment.id}>
                            <div>
                                <p>{comment.username}</p>
                                <p className="vid_description">{comment.body}</p>
                            </div>
                            <button className="comment_form_submit" onClick={() => this.handleDelete(comment)}>DELETE</button>
                        </li>
                    </div>
                )
            }
        });

        let subButton;

        if (!this.props.logged_in) {
            subButton = <button onClick={this.handleSubErr} className="vid_show_sub">SUBSCRIBE 108k</button>
        }

        if (this.props.logged_in && !this.state.subscribed) {
            subButton = <button onClick={this.handleSub} className="vid_show_sub">SUBSCRIBE 108k</button>
        } else if (this.props.logged_in && this.state.subscribed) {
            subButton = <button onClick={this.handleSubbed} className="vid_show_subbed">SUBSCRIBED 108k</button>
        };

        if (!this.props.video) {return null};
        return (
            <div>
                <video src={this.props.video.videoUrl} controlsList='nodownload' controls autoPlay className="vid_player"></video>
                <h2 className="vid_title">{this.props.video.title}</h2>
                <br/>
                <p className="vid_views">1991 Views</p>
                <br/>
                <div>
                    <section className="vid_show_desc_top">
                        <div className="vid_show_desc_top_left">
                            <i className="fas fa-user vid_show_channel_icon fa-2x"></i>
                            <p>Quirky Channel Name</p>
                        </div>
                        {/* <button className="vid_show_sub">SUBSCRIBE 3M</button> */}
                        {subButton}
                    </section>
                    <div className="vid_show_desc_stuff">
                        <p className="vid_description">{this.props.video.description}</p>
                        <br/>
                        <p className="vid_show_more">SHOW MORE</p>
                    </div>
                    <CommentForm />
                    <ul>
                        {commentsList}
                    </ul>
                </div>
            </div>
        );
    };
};

const msp = (state, ownProps) => {
    // const video = state.videos[ownProps.match.params.id] || {};
    // const comments = video.comments || {};
    // comments were deleting but only on refresh
    // was deleting comments from the videos comments slice of state before
    const comments = state.comments || {};
    const videoId = ownProps.match.params.id || "";
    return {
        videoId,
        comments: Object.values(comments),
        currentUser: state.session.user,
        logged_in: Boolean(state.session.user),
        users: state.users,
    }
};

// needed to lazy init everytime we key into value, if not there
// returned undefined which broke code, circumvent that with empty {}


const mdp = dispatch => {
    return {
        editComment: (comment) => dispatch(editComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
    }
};

export default withRouter(connect(msp, mdp)(VideoShowItem));