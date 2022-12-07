import Video from "./Video"
import './App.css';
import React, { useEffect, useState } from "react";
import db from './firebase/firebase.js'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

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
      <Navbar />
      <div className="main">
      <Sidebar/>
      <div className="feed">
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
    </div>
    </div>
  );
}

export default App;
