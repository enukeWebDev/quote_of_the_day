import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = { advice: '' };

  componentDidMount() { this.quoteOfTheDay(); };

  //Fetch data from API
  quoteOfTheDay = () => {

    const apiURL = ('https://api.adviceslip.com/advice');

    axios.get(apiURL)
      .then((response) => {

        //using destructure instead
        const { advice } = response.data.slip;

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
          <button className='button' onClick={this.quoteOfTheDay}>
            <span>💕 Thoughts of the Day 💕</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;

