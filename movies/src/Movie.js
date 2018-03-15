import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Movie extends Component {
    constructor(props) {
        super(props);
        //debugger;
        this.movie = props.movie;
        this.state = {
            item: []
          }
      }    
         

    componentDidMount() {
    this.setState({item:                
          <img
            className="Avatar"
            src={this.movie.posterurl}
            // alt={props.movie.title}
          />
        })    
  }

  render() {

    return (
      <ul>
        {this.state.item}
      </ul>
    );
  }  
}

export default Movie;