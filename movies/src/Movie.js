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
            item: [],
            isToggleOn: props.isToggleOn
          }

       this.handleClick = this.handleClick.bind(this);
      }    
         
      handleClick() {
       this.props.handler();
     console.log('movie')
     
        //this.props.onItemClick(this.props.item.id);
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn          
        }));
        console.log("xx"+ this.state.isToggleOn)
        this.props.isToggleOn = this.state.isToggleOn
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

            this.setState({info:                
              <div>
                {this.movie.title}
                {this.movie.year}
              </div>
              })
}

  
  render() {
    return (
        <div>
          {this.state.info}
            <button onClick={this.handleClick}>
            {/* <button onClick={this.props.handler.bind(this)}> */}
           
            {this.state.isToggleOn ? 'hide' : 'show'}
      </button>
      {this.state.isToggleOn ? this.state.item : ''}
      
      </div>
    );
  }  

}

export default Movie;