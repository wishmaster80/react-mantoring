import React, { Component } from 'react';
import './MovieDetails.css';
class MovieDetails extends Component {
  state = {
    movie: {},
  }
  async componentDidMount() {
    const movie = await this.GetMovie();
    this.setState({ movie: movie })
  }

  async GetMovie() {
    var url = 'https://react-mentoring-backend.herokuapp.com/movies/' + this.props.match.params.id
    const response = await fetch(url)
    return await response.json()
  }
  render() {
    return (
      <div  class="row">
        <div class="col">
          <img            
            src={this.state.movie.posterurl}
          />
        </div>
        <div class="col">
          <div>{this.state.movie.title}</div>
          { <div>
            {this.state.movie.genres && this.state.movie.genres.reduce((prev, curr) => [...prev, ', ', curr])}
          </div> }
          { <div>
            {this.state.movie.actors && this.state.movie.actors.reduce((prev, curr) => [...prev, ', ', curr])}
          </div> }
          <div>
            {this.state.movie.year}
          </div>
          <div>
            {this.state.movie.ratings && (this.state.movie.ratings.reduce((a, b) => (a + b) / this.state.movie.ratings.length).toFixed(2))}
          </div>
          <div>
            {this.state.movie.storyline}
          </div>
        </div>
      </div>
    );
  }
}
export default MovieDetails;