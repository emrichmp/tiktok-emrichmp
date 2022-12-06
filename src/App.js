import Video from "./Video"
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>TikTok</h1>
      <div className="app_videos">
        <Video 
        url="https://joy.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
        channel="emrichmp" 
        description="Description"
        sound="Yeah - Usher"
        likes={123} 
        messages={60} 
        shares={13} 
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
