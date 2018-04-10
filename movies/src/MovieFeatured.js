import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FeaturedContext } from './Featured'


class Movie extends Component {
  state = {
    detail: [],
    item: []
  }

  info(context) {
    return <MovieInfo movie={context.state.movies[this.props.id]} />
  }
  detailPart(context) {
    return <MovieDetails movie={context.state.movies[this.props.id]} />
  }

  render() {
    return (
      <FeaturedContext.Consumer>
        {(context) => (
          <React.Fragment>
            {this.info(context)}
            {this.detailPart(context)}
          </React.Fragment>
        )}
      </FeaturedContext.Consumer>
    );
  }

}

export default Movie;

class MovieInfo extends Component {

  render() {
    if (this.props.movie === undefined) return (<div> movie is undefined </div>)
    return (
      <div>
        <div>
          <div>

            {this.props.movie.genres.reduce((prev, curr) => [...prev, ', ', curr])}
          </div>
          <div>
            {this.props.movie.actors.reduce((prev, curr) => [...prev, ', ', curr])}
          </div>
          <img
            className="Avatar"
            src={this.props.movie.posterurl}
            alt={this.props.movie.title}
          />
        </div>
      </div>);
  }
}


class MovieDetails extends Component {
  render() {
    if (this.props.movie === undefined) return (<div> movie is undefined </div>)
    return (
      <div>
        <div>
          {this.props.movie.title}
        </div>
        <div>
          {this.props.movie.year}
        </div>
        <div>
          {(this.props.movie.ratings.reduce((a, b) => (a + b) / this.props.movie.ratings.length).toFixed(2))}
        </div>
        <div>
          {this.props.movie.imdbRating}
        </div>
        <div>
          <Link to={`/movie/${this.props.id}`}>Movie details</Link>
        </div>
        <div>-------------------------------------------------------------</div>
      </div>);
  }
}