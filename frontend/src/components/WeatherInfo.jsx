import React, { useState } from "react";

function WeatherInfo() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location }),
    });
    const data = await response.json();
    setWeather(data.weather);
  };

  return (
    <div>
      <h2>Check Weather</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <p>{weather.city}: {weather.temp}°C, {weather.desc}</p>
          <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon" />
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
