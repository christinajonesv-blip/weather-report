import {useState} from "react";
import axios from "axios";



function Weather()
 {

    const [city,setcity]= useState("");

    const [weather,setweather]= useState("")
    const[temp,settemp]= useState("")
    const[desc,setdesc]= useState("")

    function handleCity(evt)
    {
      setcity(evt.target.value);
    }

    function getWeather()
    {
      var weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8d6753502c359235c9507df9368884b`)
       
      weatherData.then(function(success){
       console.log(success.data);
       setweather(success.data.name);
        settemp(success.data.main.temp);
        setdesc(success.data.weather[0].description);

    })
  }

  return (
    <div className="app">
      <div className="weather-box">
        <h1>Weather Report</h1>

        <p>I can give you a weather report about your city!</p>

        <input
          onChange={handleCity}
          type="text"
          placeholder="Enter city name"
        />

        <button onClick={getWeather}>Search</button>

        <div className="weather">
          <h2><b>{weather}</b></h2>
          <p>Temperature: {temp} K</p>
          <p>Description: {desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
