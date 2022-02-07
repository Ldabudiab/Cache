import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos } from "../modules/videoManager";
import "./Styling/videoList.css"

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);


    return (
        <div className="vidlist">
            <div className="row justify-content-center">
                {videos.map((video) => (
                <Video video={video} key={video.id} />
                     ))}
            </div>
        </div>
        
    );
};

export default VideoList