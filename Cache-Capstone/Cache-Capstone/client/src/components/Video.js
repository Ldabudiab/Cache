import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { useHistory } from "react-router-dom";
import { getVideoTagsByVideoId } from "../modules/VideoTagManager";

const Video = ({ video }) => {
    

    

    const [videoTags, setVideoTags] = useState([]);

    const getVideoTags = () => {
        getVideoTagsByVideoId(video.id).then(tags => setVideoTags(tags));
    }
   const history = useHistory();

   useEffect(() => {
    getVideoTags();
}, []);

console.log(videoTags);

    {
        return (
            <Card >
                <p className="text-left px-2">Posted by: {video.userProfile.userName}</p>
                <CardBody>
                    <iframe className="video"
                        src={video.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />

                    <p>
                        <strong>{video.title}</strong>
                    </p>
                    <div className="row justify-content-center">
                        {videoTags.map((tag) => (
                           <p>{tag.tag.name}</p> 
                            ))}
                    </div>
                     
                    <p>{video.description}</p>

                    <button onClick={() => {history.push(`/managetags/${video.id}`)}}>Manage Tags</button>
    

                </CardBody>
            </Card>
        );
    }


};

export default Video;