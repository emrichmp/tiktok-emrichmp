import "./Video.css"
import { useRef, useState } from "react"
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({
    url,
    channel,
    description,
    sound,
    likes,
    messages,
    shares
}) => {
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
        src={url}
        //src="https://joy.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
        ></video>
        <VideoFooter 
        channel={channel} 
        description={description} 
        sound={sound}
        />
        <VideoSidebar 
        likes={likes} 
        messages={messages} 
        shares={shares}
        />
        </div>
    )
}

export default Video;