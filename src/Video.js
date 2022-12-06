import "./Video.css"
import { useRef, useState } from "react"
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = (props) => {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
        videoRef.current.play();
        setPlay(true);
        }
    }
    return(
        <div className="video">
        <video
        className="video_player" 
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={props.url}
        ></video>
        <VideoFooter 
        channel={props.channel} 
        description={props.description} 
        sound={props.sound}
        />
        <VideoSidebar 
        likes={props.likes} 
        messages={props.messages} 
        shares={props.shares}
        />
        </div>
    )
}

export default Video;