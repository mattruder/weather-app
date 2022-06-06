import React from 'react'
import './Weather.css'

function Weather({ weatherData, currentCity, error }) {



if (error === undefined) {

  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

  const today = new Date

  const tomorrow = days[today.getDay() + 1]
  const nextDay = days[today.getDay() + 2]
  const dayAfterNext = days[today.getDay() + 3]

  function capitalize(word) {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  const city = capitalize(currentCity)
  return (
    <div>
    <div className="weather-title">
      <h1>{city}</h1>
    </div>
    <div className="weather-box">
      <h2>Today</h2>
      <h3>{weatherData.temperature}</h3>
      <h3>{weatherData.description}</h3>
      <h3>Wind: {weatherData.wind}</h3>
    </div>
    <div className="forecast-container">
      <div className="forecast-box">
      <h2>{tomorrow}</h2>
      <p>{weatherData.forecast[0].temperature}</p>
      </div>
      <div className="forecast-box">
      <h2>{nextDay}</h2>
      <p>{weatherData.forecast[1].temperature}</p>
      </div>
      <div className="forecast-box">
      <h2>{dayAfterNext}</h2>
      <p>{weatherData.forecast[2].temperature}</p>
      </div>
    </div>
    </div>
  )
} else {
  return (
    <div className="weather-title">
      <h1>{error}</h1>
    </div>
  )

}

}

export default Weather
