import React from 'react';

const WeatherBox = ({ weather }) => {
  console.log('weather?', weather);

  // weather가 null이거나, weather.main이 없으면 렌더링하지 않음
  if (!weather || !weather.main || !weather.weather) {
    return <p>Loading weather data...</p>; // 데이터를 로딩 중일 때 표시
  }

  return (
    <div className="weather-box">
      <div className="weather-text">
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}</h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>
  );
};

export default WeatherBox;
