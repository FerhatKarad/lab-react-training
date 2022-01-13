import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';
import { Dice } from './components/Dice';
import Carousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <Greetings lang="de" children='Ludwig'></Greetings>
        <Greetings lang="fr" children='François'></Greetings>


        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <LikeButton />  <LikeButton />

        <ClickablePicture
          img='/assets/images/maxence.png'
          imgClicked='/assets/images/maxence-glasses.png' />
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
