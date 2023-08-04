import React, { useEffect, useState } from "react";
import db from './firebase/firebase.js'
import { Routes, Route } from "react-router-dom";
import Home from './home/Home.js'
import Upload from './upload/Upload.js'
import Login from './login/Login.js'
import Signup from './signUp/Signup.js'

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
      <Routes>
        <Route path="/" exact element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/upload" element={ <Upload/> } />
      </Routes>
    </div>
  );
}

export default App;
