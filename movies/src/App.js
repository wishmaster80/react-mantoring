import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    listItems: []
  }
  async componentDidMount() {
    debugger;
    const movies =  await this.GetMovies();
    this.setState({listItems: movies.map((movie) => 
      <li key={movie.key}>
      {movie.name} {movie.year} {movie.director} {movie.genre} {movie.rate}
    </li>)
     })
  }

  async GetMovies() {

    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies')
    return await response.json()    
/* 
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
        , error => { alert('error') })*/
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
