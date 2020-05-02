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

function App() {
  return (
    <div>
      <Slider />
      <Quote />
      <CountriesSection />
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
