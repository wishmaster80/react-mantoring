import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    listItems: []
  }
  componentDidMount() {
    debugger;
    this.GetMovies();
  }

  GetMovies() {
    fetch('https://react-mentoring-backend.herokuapp.com/movies')
      .then(
        response => response.json()
      )
      .then(
        response => {
          this.setState({listItems: response})
        }
        , error => { alert('error') })
  }

  Set(response) {

    this.listItems = response.map((movie) =>
      <this.ListItem key={movie.toString()}
        value={movie} />)
    alert(this.listItems.length)
  }

  ListItem(props) {
    return <li>{props.year}</li>;
  }

  render() {

    // const movies = [1, 2, 3, 4, 5];
    //  listItems = movies.map((movie) =>
    // <ListItem key={movie.toString()}
    //           value={movie} />  );    
    return (
      <ul>
        {this.state.listItems.length}
      </ul>
    );
  }
}

export default App;
