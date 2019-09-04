import React from 'react';
import CommentForm from '../comments/comment_container';
import CommentFormContainer from'../comments/comment_container';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class VideoShowItem extends React.Component {
    constructor(props) {
        super(props);

    };

    render() {
        const commentsList = this.props.comments.map((comment) => {
            return (
                <li key={comment.id}>{comment.body}</li>
            )
        });
        // debugger
        if (!this.props.video) {return null};
        return (
            <div>
                <video width="650" height="375" src={this.props.video.videoUrl} controlsList='nodownload' controls autoPlay className="vid_player"></video>
                {/* <h1>please</h1> */}
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
                        <button className="vid_show_sub">SUBSCRIBE 3M</button>
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
    debugger
    const video = state.videos[ownProps.match.params.id] || {};
    const comments = video.comments || {};
    return {
        comments: Object.values(comments),
    }
};

// needed to lazy init everytime we key into value, if not there
// returned undefined which broke code, circumvent that with empty {}


// const mdp = dispatch => {
//     return {

//     }
// };

export default withRouter(connect(msp)(VideoShowItem));