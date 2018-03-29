import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Movie extends Component {
  state = {
    detail: [],
    item: []
  }
  componentDidMount() {
    this.setState({
      detail:
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
            />
          </div>
        </div>
    })

    this.setState({
      info:
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
        </div>
    })
  }
  infoPart =()=>{
    return (this.state.info)
  }
  conditionalDetailPart() {
    return (this.state.detail);
  }

  render() {
    return (
      <div>
        {this.infoPart()}        
        {this.props.isToggleOn && this.conditionalDetailPart()}

      </div>
    );
  }

}

export default Movie;