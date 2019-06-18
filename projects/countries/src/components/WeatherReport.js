import React from 'react';

const WeatherReport = ({ weather }) => {
  if (!weather) {
    return (
      <></>
    )
  }

  return (
    <>
      <p><strong>temperature:</strong> {weather.current.temp_f}˚ F</p>
      <img src={weather.current.condition.icon} alt={`weather condition: ${weather.current.condition.text}`} />
      <p><strong>wind:</strong> {weather.current.wind_mph} mph {weather.current.wind_dir}</p>
    </>
  )
}

export default WeatherReport