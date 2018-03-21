import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Movie extends Component {
  state = {
    detail: [],
    item: []
  }
  handleClick = () => {
    this.props.handler(this.props.isToggleOn ? 0 : this.props.id);
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
        </div>
    })
  }


  render() {
    return (

      <div>
        {this.state.info}
        <button onClick={this.handleClick}>

          {this.props.isToggleOn ? 'hide' : 'show'}
        </button>
        {this.props.isToggleOn ? this.state.detail : ''}

      </div>
    );
  }

}

export default Movie;