import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    listItems: []
  }


  async componentDidMount() {
    //debugger;
    const movies =  await this.GetMovies();
    this.setState({listItems: movies.map((movie) => 
      <li key={movie.key}>
      {movie.title} {movie.year} {movie.imdbRating} <Movie movie={movie} />
    </li>)
     })
  }


  async GetMovies() {

    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies')
    return await response.json()
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
