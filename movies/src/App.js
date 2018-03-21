import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props);
    //debugger;
    this.state = {
    movies: [],
    activeMovieId: false
    }
    this.handler = this.handler.bind(this)
  }

    handler = (movieId) => {
    this.setState({activeMovieId: movieId});
 
    }


  async componentDidMount() {    
    const movies =  await this.GetMovies();
    //debugger;
    this.setState({movies : movies})
  }
  async GetMovies() {

    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies')
    return await response.json()
  }

  render() {
      console.log('render' + this.state.activeMovieId)
    return (      
      <ul>        
          {this.state.movies.map( (movie) =>  <Movie key={movie.id} id={movie.id} movie={movie} handler={this.handler} isToggleOn={this.state.activeMovieId == movie.id} />   )}
      </ul>
    );
  }
}

export default App;
