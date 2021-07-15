import React, { useState } from "react";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from 'react-animated-weather';
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  
  const [ready, setReady] = useState (false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round (response.data.main.temp));
    setReady(true);
  }

  if (ready) {
    return (
  <div className="body">
      <form className="search">
        <input
          type="shearch"
          placeholder="Search for a City"
          className="searchBar"
        />
        <input type="submit" value="Search" className="searchBar" />
      </form>
      <p className="day">Day, Date</p>
      <p className="time">Time</p>
      <h1 className="city">City</h1>
      <p className="description"> Weather description </p>
      <div className="icon"> <ReactAnimatedWeather
   icon={'CLEAR_DAY'}
  color= {'white'}
  size = {100}
  animate = {true}
  /> </div>
      <h2 className="temp">{temperature}°</h2>
      <p className="unit">C° | F°</p>
      <div className="info">
      <p className="humidity">Humidity: 00 |</p>
      <p className="wind">Wind: 00</p>
      </div>
    </div>
    );
  }else{
    const apiKey ="e411a3752881f98038e4e57881b9b78f";
    let city= "Portland";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=Imperial`;
  
  axios.get(apiUrl).then(handleResponse);
  
  return( <Loader
        type="Puff"
        color="#00BFFF"
        height={50}
        width={100}
        timeout={3000} //3 secs
      />);
}

  
  
}