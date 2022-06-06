import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Weather from './Weather.js'
import Nav from './Nav.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      weatherData: '',
      currentCity: ''
    }

    this.getWeather = this.getWeather.bind(this)

  }

  componentDidMount = () => {
    fetch('https://goweather.herokuapp.com/weather/London')
    .then(response => response.json())
    .then(data => this.setState({ weatherData: data, currentCity: "London" }))
  }

  getWeather = (city, event) => {
    event.preventDefault()
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(response => response.json())
    .then(data => this.setState({ weatherData: data, currentCity: city }))
    .catch(err => console.log("ERROR"))
  }

  render() {
    return (
      <div>
      <Nav getWeather={this.getWeather} />
      <div className="App">
        {this.state.weatherData && this.state.currentCity && <Weather weatherData={this.state.weatherData} currentCity={this.state.currentCity} />}
      </div>
      </div>
    );
  }
}

export default App;
