import React from 'react';
import './CurrentForecast.scss';
import sunny from '../weather-assets/sunny.png';
import partialcloud from '../weather-assets/partialcloud.png';


const CurrentForecast = () => {
  return (
    <div className='currentForecast'>
      <div className='text-container'>
        <h1 className='city'>Barcelona</h1>
        <h2 className='chance'>Chance of Rain: 50%</h2>
        <p className='temp'>34 °</p>
      </div>
      <div className='weather-image'>
        <img src={sunny} alt="Sunny Weather" />
      </div>
    </div>
  );
}

export default CurrentForecast;
