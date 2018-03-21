import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Movie extends Component {
    constructor(props) {
        super(props);
        //debugger;
        this.movie = props.movie;
        this.state = {
            detail: [],
            item: []            
          }
          this.isToggleOn = false
       this.handleClick = this.handleClick.bind(this);
      }    
         
      handleClick() {
       this.props.handler( this.isToggleOn ? 0 : this.props.id);
      }

    componentDidMount() {
        this.setState({detail:
          <div>  
            <div>
            <div>
              {this.movie.genres.reduce((prev, curr) => [...prev, ', ', curr])}
            </div>
            <div>
              {this.movie.actors.reduce((prev, curr) => [...prev, ', ', curr])}
            </div>                          
              <img
                className="Avatar"
                src={this.movie.posterurl}                
              />
            </div>
          </div>
            })

            this.setState({info:                
              <div>
              <div>
                {this.movie.title}
              </div>
              <div>
                {this.movie.year}
              </div>
              <div>                
                {(this.movie.ratings.reduce((a, b) => (a + b)/this.movie.ratings.length).toFixed(2)) }
              </div>
              </div>
              })
}

  
  render() {
    this.isToggleOn = this.props.isToggleOn;
    console.log(this.movie.id)    
    return (
      
        <div>          
          {this.state.info}
            <button onClick={this.handleClick}>            
           
            {this.isToggleOn ? 'hide' : 'show'}
      </button>
      {this.isToggleOn ? this.state.detail : ''}
      
      </div>
    );
  }  

}

export default Movie;