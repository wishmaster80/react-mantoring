import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Movie extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }  
  state = {
    detail: [],
    info: []
  }  

  async  handleClick ()  {
    var movie =  this.props.moviesCache[this.props.id];
    if(movie === undefined){
      movie = await this.GetMovie();
    }
    this.props.addToCache(movie);
    this.props.handler(this.props.isToggleOn ? 0 : this.props.id);

    this.setState({
      detail:
        <div>
          <div>
            <div>
              {movie.genres.reduce((prev, curr) => [...prev, ', ', curr])}
            </div>
            <div>
              {movie.actors.reduce((prev, curr) => [...prev, ', ', curr])}
            </div>
            <img
              className="Avatar"
              src={movie.posterurl}
              alt={movie.title}
            />
          </div>
        </div>
    })
  }
  async GetMovie() {
    var url = 'https://react-mentoring-backend.herokuapp.com/movies/' + this.props.id    
    const response = await fetch(url)
    return await response.json()
  }

  async componentDidMount() {
    this.setState({
      info:
        <div>
          <div>
            {this.props.movie.id}
          </div>
          <div>
            {this.props.movie.title}
          </div>
          <div>
            {this.props.movie.year}
          </div>
          <div>
            {(this.props.movie.ratings.reduce((a, b) => (a + b) / this.props.movie.ratings.length).toFixed(2))}
          </div>
          <div>
            {this.props.movie.imdbRating}
          </div>          
          <div>
              <Link to={`/movie/${this.props.id}`}>Movie details</Link>
          </div>          
        </div>
    })

  }
  infoPart =()=>{
    return (this.state.info)
  }
  button = ()=> {
    return (
    <button onClick={this.handleClick}>
      {this.props.isToggleOn ? 'hide' : 'show'}
    </button>
    )
  }
  conditionalDetailPart() {
    return (this.state.detail);
  }

  render() {
    return (
      <div>
        {this.infoPart()}
        {this.button()}
        {this.props.isToggleOn && this.conditionalDetailPart()}

      </div>
    );
  }

}

export default Movie;