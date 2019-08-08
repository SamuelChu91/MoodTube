import React from 'react';
import HeaderNavContainer from '../header/header_nav_container';
import { Link } from 'react-router-dom';

class VideoUpload extends React.Component {

    render () {
        return (
            <div>
                <header>
                    <HeaderNavContainer />
                </header>
                <div className="vid_upload_window">
                    <div className="vid_upload_box">
                    <label className="vid_upload_logo">
                        <input onClick={this.props.upload} type="file" accept="video/*" className="vid_upload_input"/>
                        <i className="fas fa-arrow-alt-circle-up fa-6x vid_upload_arrow"></i>
                        <p className="vid_upload_sel">Select Files to Upload</p>
                        <p className="vid_upload_drag">Or Drag and Drop Video Files</p>
                    </label>
                    <button>Public</button>
                    </div>
                    <div className="vid_upload_bot">
                        <h6 className="vid_upload_help">HELP AND SUGGESTIONS</h6>
                        <br/>
                        <span className="vid_upload_bot_text">Want to upload videos longer than 15 minutes? Increase your limit</span>
                        <span className="vid_upload_bot_text">By submitting your videos to YouTube, you acknowledge that you agree to YouTube's Terms of Service and Community Guidelines.</span>
                        <span className="vid_upload_bot_text">Please be sure not to violate others' copyright or privacy rights. Learn more</span>
                        <div>
                            <a href="https://support.google.com/youtube/topic/9257439?hl=en&visit_id=637007986476488821-1567737943&rd=1" className="vid_upload_links">Upload Instructions  |</a>
                            <a href="https://support.google.com/youtube/topic/2888603?hl=en" className="vid_upload_links">Troubleshooting  |</a>
                            <a href="https://support.google.com/youtube/answer/57407?hl=en" className="vid_upload_links">Mobile Uploads</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoUpload;