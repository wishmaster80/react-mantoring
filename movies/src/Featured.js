import React, { Component } from 'react';
import MovieFeatured from './MovieFeatured';

class Featured extends Component {
  state = {
    movies: [],
    activeMovieId: false,
    postersList: []
  }

  SetRandomNum(){
    var list = [];  
    while(list.length < 15){
      var num = Math.floor(Math.random() * 50) + 1;
      if(!list.includes(num)){
        list.push(num)
      }
    }
    return list;
  }

  async componentDidMount() {

   var postersList = this.SetRandomNum();
   console.log(postersList.length)

    const movies = await this.GetMovies();
    this.setState({postersList: postersList })
    this.setState({ movies: movies })
  }
  async GetMovies() {
    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies?_sort=imdbRating&_order=desc&_limit=50')
    return await response.json()
  }

  listMovie(movies) {
    return movies.map((movie) => <MovieFeatured key={movie.id} id={movie.id} movie={movie} isToggleOn={this.state.postersList.includes(movie.id)} />)
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