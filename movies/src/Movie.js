import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Movie extends Component {
    constructor(props) {
        super(props);
        //debugger;
        this.movie = props.movie;
        this.state = {
            info: [],
            item: []            
          }
          this.isToggleOn = false
       this.handleClick = this.handleClick.bind(this);
      }    
         
      handleClick() {
       this.props.handler( this.isToggleOn ? 0 : this.props.id);
      }

    componentDidMount() {
        this.setState({item:                
            <div>
              
              <img
                className="Avatar"
                src={this.movie.posterurl}                
              />
            </div>
            })

            this.setState({info:                
              <div>
                {this.movie.title}
                {this.movie.year}
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
      {this.isToggleOn ? this.state.item : ''}
      
      </div>
    );
  }  

}

export default Movie;