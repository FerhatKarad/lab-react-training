import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';
import { Dice } from './components/Dice';
import Carousel from './components/Carousel';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LikeButton />  <LikeButton /> 
      <ClickablePicture
      img='/assets/images/maxence.png'
      imgClicked='/assets/images/maxence-glasses.png'/>
      <Dice />
      {/* <Carousel
     imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/> */}

      </header>
    </div>
  );
}

export default App;
