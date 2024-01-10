import React from 'react';
import './TodayForecast.scss';
import sunny from '../weather-assets/sunny.png';
import partialcloud from '../weather-assets/partialcloud.png';

const TodayForecast = () => {
  var time = ["6:00am","9:00am","12:00pm","2:00pm", "6:00pm", "9:00pm"];
   


  return (
    <div className='today-forecast-container'>
      <h1 className='title'> Today's Forecast</h1>
      
     <div className='time-slots'> 

        <ul>
        
        {time.map((item, index) => (

        <li  
        
        key={index}>{item}
        
        
        
        
        </li> 

        ))}


        </ul>



     </div>

      <p> </p>

    </div>
  )
}

export default TodayForecast;
