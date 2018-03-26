import React from 'react';

const MovieDetails = (props) => {
  return (
    <div className="container">
      <h1>Details!! {props.match.params.id}</h1>
    </div>
  );
}

export default MovieDetails;