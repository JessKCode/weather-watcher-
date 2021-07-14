import React from "react";

export default function Weather(props){
 return (
  <div className="Weather">
      <form className="search">
        <input
          type="shearch"
          placeholder="Search for a City"
        />
        <input type="submit" value="Search" />
      </form>
      <p className="day">Day, Date</p>
      <p className="time">Time</p>
      <h1 className="city">City</h1>
      <p className="description"> Weather description </p>
      <div className="icon">Icon</div>
      <h2 className="temp">36°</h2>
      <p className="unit">C° | F°</p>
      <p className="humidity">Humidity</p>
      <p className="wind">Wind</p>
    </div>
    );
}