import React, { Component } from 'react';
import './App.css';

class Exoplanets extends React.Component {

constructor(props) {
  super(props);

this.state = {exoplanets: []};
}

componentDidMount() {
  this.exoplanetList();
}

exoplanetList() {
  fetch('http://localhost:5000/')
    .then(data => data.json())
    .then(( results ) => this.setState({ exoplanets: results }));
}

  render() {
    const { exoplanets } = this.state
       if (exoplanets.length) {
        return (
          <h1>Exoplanets</h1>,
              <p>Planet Name: {exoplanets[7].pl_name}</p>
              
        )
      }
      else {
        return <h1>loading</h1>;
      }
  }
}

export default Exoplanets  
