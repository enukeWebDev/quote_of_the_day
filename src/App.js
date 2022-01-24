import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  state = {
    advice: ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        //console.log(response.data.slip.advice);
        //using destructure instead
        const { advice } = response.data.slip;
        //console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    //using destructre 
    const { advice } = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>💕 Share Me Your Thoughts 💕</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;