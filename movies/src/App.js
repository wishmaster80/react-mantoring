import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props);
    //debugger;
    this.state = {
    listItems: []
    }

  }

  
  async componentDidMount() {
    
    const movies =  await this.GetMovies();
    //debugger;
    this.setState({listItems: movies.map((movie) => 
     
       <Movie key={movie.id}  movie={movie}  />
      )
     })
  }

  async GetMovies() {

    const response = await fetch('https://react-mentoring-backend.herokuapp.com/movies')
    return await response.json()
  }

  render() {

    return (
      <ul>
        {this.state.listItems}
      </ul>
    );
  }
}

export default App;
