import React, { Component } from 'react';
import MovieFeatured from './MovieFeatured';


export const FeaturedContext = React.createContext();

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
    return movies.map((movie2) => <MovieFeatured key={movie2.id} id={movie2.id} isToggleOn={this.state.postersList.includes(movie2.id)}/>)
  }
  render() {    
    return (
      <FeaturedContext.Provider value={{state: this.state}}>
        <ul>
          {this.listMovie(this.state.movies)}
        </ul>
      </FeaturedContext.Provider>
    );


  }
}

export default Featured;