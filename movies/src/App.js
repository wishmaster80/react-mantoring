import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    var listItems = []
    function ListItem(props) {      
      return <li>XX {props.value}</li>;
    }
  function Set(response)
  {    
    listItems = response.map((movie) =>
    <ListItem key={movie.toString()}
      value={movie} /> )
      alert(listItems)
  }

    async function GetMovies() {
      fetch('https://react-mentoring-backend.herokuapp.com/movies')
     .then(
      response => response.json()
      )
      .then(
      response => {        
        Set(response)
      }
      
    
    , error => {alert('error')}
    )
    
    }
    GetMovies();
    // const movies = [1, 2, 3, 4, 5];
    //  listItems = movies.map((movie) =>
    // <ListItem key={movie.toString()}
    //           value={movie} />
  //);    
    return (
      <ul>
      {listItems}
    </ul>
    );
  }
}

export default App;
