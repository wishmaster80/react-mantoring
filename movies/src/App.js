import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import MoviesList from './MoviesList';
import Featured from './Featured';
import MovieDetails from './MovieDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/moviesList">MoviesList</Link>
            </li>
            <li>
              <Link to="/featured">Featured</Link>
            </li>
          </ul>

          <Route exact path="/movieslist" component={MoviesList} />
          <Route path="/featured" component={Featured} />
          <Route path="/movie/:id" component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;