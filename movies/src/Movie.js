import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Movie extends Component {
    constructor(props) {
        super(props);
        //debugger;
        this.movie = props.movie;
        this.state = {
            item: [],
            isToggleOn: false
          }

        this.handleClick = this.handleClick.bind(this);
      }    
         
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn          
        }));
        
      }

    componentDidMount() {
        this.setState({item:                
            <div>
              <img
                className="Avatar"
                src={this.movie.posterurl}
                // alt={props.movie.title}
              />
            </div>
            })
}

  
  render() {
    return (
        <ul>
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'hide' : 'show'}
      </button>
      {this.state.isToggleOn ? this.state.item : ''}
      
      </ul>
    );
  }  

}

export default Movie;