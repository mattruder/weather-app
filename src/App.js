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
      currentCity: '',
      error: ''
    }

    this.getWeather = this.getWeather.bind(this)

  }

  componentDidMount = () => {
    fetch('https://goweather.herokuapp.com/weather/London')
    .then(response => response.json())
    .then(data => this.setState({ weatherData: data, currentCity: "London", error: false }))
    .catch(err => this.setState({ error: "There Was A Problem Loading The Page"}))
  }

  getWeather = (city, event) => {
    event.preventDefault()
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(response => response.json())
    .then(data => {
      if(data.temperature) {
        this.setState({ weatherData: data, currentCity: city, error: '' })
      } else if (data.temperature === "") {
        this.setState({error: "No Results Match Your Search"})
      }

    })
    .catch(err => this.setState({ error: "No Results Match Your Search"}))
  }

  render() {

    return (
      <div>
      <Nav getWeather={this.getWeather} />
      <div className="App">
        {this.state.weatherData && this.state.currentCity && !this.state.error && <Weather weatherData={this.state.weatherData} currentCity={this.state.currentCity} />}
        {this.state.error && <Weather error={this.state.error} />}
      </div>
      </div>
    );
  }
}

export default App;
