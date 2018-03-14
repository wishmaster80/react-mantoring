import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    listItems: []
  }
  componentDidMount() {
    debugger;
    this.GetMovies();
  }

  GetMovies() {
    fetch('https://react-mentoring-backend.herokuapp.com/movies')
      .then(
        response => response.json()
      )
      .then(
        response => {
          this.setState({listItems: response.map((movie) => 
            <li key={movie.key}>
            {movie.name} {movie.year} {movie.director} {movie.genre} {movie.rate}
          </li>)
           })
        }
        , error => { alert('error') })
  }



  render() {

    return (
      <ul>
        {this.state.listItems}
      </ul>
    );
  }
}

export default App;
