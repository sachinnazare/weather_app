import React from 'react'
import "./weatherApp.css"
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

const WeatherApp = () => {
    var search_icon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" />
            <div className="search-icon">
                {search_icon}
            </div>
        </div>
        <div className="weather-icon">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">  24 C</div>
        <div className="weather-location"> London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage"> 64%</div>
                    <div className="text-type"> Humidity </div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percentage"> 18 km/hr</div>
                    <div className="text-type"> Wind speed </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
