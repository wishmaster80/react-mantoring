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

const MovieInfo = (props) => {
  if (props.movie === undefined) return (<div> movie is undefined </div>)
  return (
    <div>
      <div>
        <div>

          {props.movie.genres.reduce((prev, curr) => [...prev, ', ', curr])}
        </div>
        <div>
          {props.movie.actors.reduce((prev, curr) => [...prev, ', ', curr])}
        </div>
        <img
          className="Avatar"
          src={props.movie.posterurl}
          alt={props.movie.title}
        />
      </div>
    </div>);
}


const MovieDetails = (props) => {
  if (props.movie === undefined) return (<div> movie is undefined </div>)
  return (
    <div>
      <div>
        {props.movie.title}
      </div>
      <div>
        {props.movie.year}
      </div>
      <div>
        {(props.movie.ratings.reduce((a, b) => (a + b) / props.movie.ratings.length).toFixed(2))}
      </div>
      <div>
        {props.movie.imdbRating}
      </div>
      <div>
        <Link to={`/movie/${props.id}`}>Movie details</Link>
      </div>
      <div>-------------------------------------------------------------</div>
    </div>);
}