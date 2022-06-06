import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  render() {
  return (
    <div className="nav">
      <h1>The Weather</h1>
      <form className='searchBar'>
        <input
          type="text"
          id="search"
          placeholder="City"
          value={this.state.search}
          onChange={event => this.handleChange(event)}
        />
        <button
          className="search-btn"
          onClick={(event) => {this.props.getWeather(this.state.search, event)}}>
          Search
        </button>
      </form>
    </div>
  )
  }
}

export default Nav
