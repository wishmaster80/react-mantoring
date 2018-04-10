import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
    activeMovieId: false,
    moviesCache: []
  }

  handler = (movieId) => {
    this.setState({ activeMovieId: movieId });
  }
  addToCache = (movie) => {
    var moviesCache = this.state.moviesCache;
    moviesCache[movie.id] = movie;
    this.setState({
      moviesCache: moviesCache
    })    
  }

  async componentDidMount() {
    const movies = await this.GetMovies();
    this.setState({ movies: movies })
  }
  async GetMovies() {
    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies')
    return await response.json()
  }

  listMovie(movies) {
    return movies.map((movie) => <Movie key={movie.id} id={movie.id} movie={movie} moviesCache={this.state.moviesCache} handler={this.handler} addToCache ={this.addToCache } isToggleOn={this.state.activeMovieId === movie.id} />)
  }
  render() {    
    return (
      <ul>
        {this.listMovie(this.state.movies)}
      </ul>
    );


  }
}

export default MoviesList;
