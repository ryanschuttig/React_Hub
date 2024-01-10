import React from "react";
import "./WeatherPage.scss";
import SearchBar from "./weather-components/SearchBar";
import CurrentForecast from "./weather-components/CurrentForecast";
import TodayForecast from "./weather-components/TodayForecast";

const WeatherPage = () => {
  return (
    <div className="weather-container">
        
      <SearchBar/>
      <CurrentForecast/>
      <TodayForecast/>


    </div>
  );
};

export default WeatherPage;
