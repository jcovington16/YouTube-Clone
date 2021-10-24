import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import './App.css';
import SideBar from './components/SideBar';
import Videos from './components/Videos';
import RecommendedVideos from './components/RecommendedVideos';
//import cors from 'cors';

function App() {

  const [videoID, setVideoID] = useState("");
  
  useEffect(() => {
    console.log(videoID)
  }, [videoID])

  const handleUpdate = (info) => {
    setVideoID(info)
  }

  return (
    <div className="App">
      <Header setVideoID={setVideoID}/>

      <div className="main__page">
        <SideBar />
        <Videos video={videoID}/>
        <RecommendedVideos video={videoID} update={(info) => handleUpdate(info)}/>
      </div>
      
    </div>
  );
}

export default App;
