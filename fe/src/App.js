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
    // const exoplanets = this.state.exoplanet.map((pl_name, i) => (
       if (exoplanets.length) {
        return (
              console.log(exoplanets[1].pl_name)
        )
      }
      else {
        return <h1>loading</h1>;
      }
      return (
        <div>
          <h1>Exoplanets</h1>
          {/* { exoplanets.length > 0 ? console.log(exoplanets[1].pl_name) : <h1> Loading...</h1> } */}

          {/* {console.log(exoplanets[1].)} */}
            
            {/* <p>{this.state.exoplanets.pl_name}</p> */}
            {/* <span> { exoplanets.pl_name }</span> */}
          </div>
        )
  }
}

export default Exoplanets  
