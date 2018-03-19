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
    this.handler = this.handler.bind(this)
  }

  handler() {
   // debugger;
    console.log("parent")
//     var x= this.state.listItems.map((movie) => {
//       console.log( movie.year);
//     return movie;
// })


    this.setState({
      listItems: this.state.listItems.map((movie) => {
         movie.props.isToggleOn = false;
      return movie;
  })
    }
    );
  }


  async componentDidMount() {

    const movies =  await this.GetMovies();
    //debugger;
    this.setState({listItems: movies.map((movie) =>

       <Movie key={movie.id}  movie={movie} handler={this.handler} isToggleOn={false} />
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
