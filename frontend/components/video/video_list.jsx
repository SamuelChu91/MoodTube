import React from 'react';
import VideoItem from './video_item';

class VideoList extends React.Component {
    constructor(props) {
        super(props);

        this.shuffle = this.shuffle.bind(this);
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    componentDidMount() {
        this.props.showVids();
    }

    render() {
        const random = this.shuffle(this.props.videos)

        const trendingVideos = random.slice(0, 6).map((video) =>{
            // debugger
            return (
                <li key={video.id} className="vid_index_vid"><VideoItem video={video} /></li>
            );
        });
        
        const recommendedVideos = random.slice(6, 12).map((video) => {
            // debugger
            return (
                <li key={video.id} className="vid_index_vid"><VideoItem video={video} /></li>
            );
        });

        const moreVideos = random.slice(12, 18).map((video) => {
            // debugger
            return (
                <li key={video.id} className="vid_index_vid"><VideoItem video={video} /></li>
            );
        });

        return (
            <div>
                <div className="vid_index_row_stuff">
                    <h2>Trending</h2>
                    <ul className="vid_index_row_vids">
                        {trendingVideos}
                    </ul>
                </div>

                <div className="vid_index_row_stuff">
                    <h2>Recommended</h2>
                    <ul className="vid_index_row_vids">
                        {recommendedVideos}
                    </ul>
                </div>

                <div className="vid_index_row_stuff">
                    <h2>More Videos</h2>
                    <ul className="vid_index_row_vids">
                        {moreVideos}
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoList;