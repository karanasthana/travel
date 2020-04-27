import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './Views/Slider';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Full1 from './Assets/full_image1.jpg';
import Full2 from './Assets/full_image2.jpg';
import Full3 from './Assets/full_image3.jpg';
import Full4 from './Assets/full_image4.jpg';

function App() {
  const imgResponsive = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  };
  const img = {
    width: '100vw',
  };

  return (
    <div>
      <Slider />
      <div>
        <img src={Full1} alt={'India'} style={Object.assign(imgResponsive, img)} />
        <img src={Full2} alt={'Singapore'} style={Object.assign(imgResponsive, img)} />
        <img src={Full3} alt={'USA'} style={Object.assign(imgResponsive, img)} />
        <img src={Full4} alt={'Canada'} style={Object.assign(imgResponsive, img)} />
      </div>
      <div className="App">
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
      </div>
    </div>
  );
}

export default App;
