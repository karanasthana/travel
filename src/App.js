import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Slider from './Views/Slider';
import Quote from './Views/Quote';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import FullImage from './Views/FullImage';
// import India from './Views/India';
import CountriesSection from './Views/CountriesSection';
import India from './staticData/countryData/India.json';
import Singapore from './staticData/countryData/Singapore.json';

function App() {
  return (
    <div>
      <CountriesSection json={India} />
      <Quote quote={'Live with no excuses and travel with no regrets'}/>
      <CountriesSection json={Singapore} />
      <Quote quote={'The World is a book and those who do not travel read only a page'}/>
      <Slider />
      {/* <FullImage /> */}
      {/* <India /> */}

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>
  );
}

export default App;
