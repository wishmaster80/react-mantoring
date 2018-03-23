import React from 'react';

const Featured = (props) => {
  return (
    <div className="container">
      <h1>Futures!! {props.match.params.id}</h1>
    </div>
  );
}

export default Featured;