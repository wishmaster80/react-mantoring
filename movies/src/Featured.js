import React, { Component } from 'react';
import Movie from './Movie';

class Featured extends Component {
  state = {
    movies: [],
    activeMovieId: false
  }

  handler = (movieId) => {
    this.setState({ activeMovieId: movieId });
  }

  async componentDidMount() {
    const movies = await this.GetMovies();
    this.setState({ movies: movies })
  }
  async GetMovies() {
    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies?_sort=imdbRating&_order=desc&_limit=50')
    return await response.json()
  }

  listMovie(movies) {
    return movies.map((movie) => <Movie key={movie.id} id={movie.id} movie={movie} handler={this.handler} isToggleOn={this.state.activeMovieId === movie.id} />)
  }
  render() {    
    return (
      <ul>
        {this.listMovie(this.state.movies)}
      </ul>
    );


  }
}

export default Featured;