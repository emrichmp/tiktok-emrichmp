import Video from "./Video"
import './App.css';
import { useEffect, useState } from "react";
import db from './firebase/firebase.js'

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => 
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(videos)

  return (
    <div className="app">
      <h1>TikTok</h1>
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, sound, likes, messages, shares}) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              sound={sound}
              likes={likes}
              messages={messages} 
              shares={shares}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
