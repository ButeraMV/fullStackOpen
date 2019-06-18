import React, { useState, useEffect } from 'react';
import axios from 'axios'
import WeatherReport from './WeatherReport'

const Weather = ({ city }) => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    axios
      .get(`http://api.apixu.com/v1/current.json?key=67b33782d7c4443992d150254191806&q=${city}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [city])

  return (
    <>
      <h2>Weather in {city}</h2>
      <WeatherReport weather={weather} />
    </>
  )
}

export default Weather