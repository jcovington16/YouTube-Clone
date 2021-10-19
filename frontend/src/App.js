import React, {useState} from 'react';
import Header from './components/Header';
import './App.css';
import Videos from './components/Videos';
//import cors from 'cors';

function App() {
  return (
    <div className="App">
      <Header/>
      <Videos />
    </div>
  );
}

export default App;
